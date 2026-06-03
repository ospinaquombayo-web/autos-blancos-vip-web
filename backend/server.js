const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();
const nodemailer = require("nodemailer");
const dns = require("dns");

// Forzar IPv4 primero
dns.setDefaultResultOrder("ipv4first");

// Ver qué IPs devuelve Gmail
dns.lookup("smtp.gmail.com", { all: true }, (err, addresses) => {
  console.log("SMTP:", addresses);
});

const app = express();

// CONFIGURACIÓN DE CORS PERMISIVO PARA NETLIFY Y LOCALHOST
app.use(
  cors({
    origin: "*", // Permite que cualquier origen (tanto tu localhost como tu web publicada) envíe datos
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());

// 🔌 CONFIGURACIÓN DE LA BASE DE DATOS EN LA NUBE (AIVEN)
const db = mysql.createConnection({
  host: "mysql-2cadf4fa-autosblancosvip.h.aivencloud.com",
  port: 18890,
  user: "avnadmin",
  password: process.env.AIVEN_PASSWORD, // 🔥 Ahora lee la contraseña de forma segura desde el .env
  database: "defaultdb",
  ssl: {
    rejectUnauthorized: false,
  },
});

// Motor de correos optimizado para producción en Render
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "josedan538@gmail.com",
    pass: process.env.EMAIL_PASS || "vhrmzcunhczcexlz",
  },
});

db.connect((err) => {
  if (err) {
    console.log("❌ Error de conexión a la nube:", err);
  } else {
    console.log("🚀 MySQL en la nube (Aiven) conectado correctamente");
  }
});

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.post("/cotizacion", (req, res) => {
  const {
    nombre,
    telefono,
    correo,
    servicio,
    origen,
    destino,
    fecha_servicio,
    pasajeros,
    mensaje,
  } = req.body;

  const sql = `
    INSERT INTO cotizaciones 
    (nombre, telefono, correo, servicio, origen, destino, fecha_servicio, pasajeros, mensaje) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      nombre,
      telefono,
      correo,
      servicio,
      origen,
      destino,
      fecha_servicio,
      pasajeros,
      mensaje,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al guardar");
      } else {
        const mailOptions = {
          from: "josedan538@gmail.com",
          to: "cp8475050@gmail.com",
          subject: "Nueva Cotización - VIP WHITE",
          html: `
    <h2>Nueva solicitud de cotización</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Correo:</strong> ${correo}</p>
    <p><strong>Servicio:</strong> ${servicio}</p>
    <p><strong>Origen:</strong> ${origen}</p>
    <p><strong>Destino:</strong> ${destino}</p>
    <p><strong>Fecha:</strong> ${fecha_servicio}</p>
    <p><strong>Pasajeros:</strong> ${pasajeros}</p>
    <p><strong>Mensaje:</strong> ${mensaje}</p>
  `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            // 🔥 Esto nos mostrará el error real en la consola de Render
            console.log("❌ ERROR ENVIANDO CORREO:", error);
          } else {
            console.log("✅ Correo enviado con éxito:", info.response);
          }
        });
      }
    },
  );
});

app.get("/cotizaciones", (req, res) => {
  const sql = "SELECT * FROM cotizaciones ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error obteniendo cotizaciones");
    } else {
      res.json(result);
    }
  });
});

app.delete("/cotizaciones/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM cotizaciones WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error eliminando");
    } else {
      res.send("Cotización eliminada");
    }
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
