const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "Autos_Blancos_VIP",
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "josedan538@gmail.com",
    pass: "vhrmzcunhczcexlz",
  },
});

db.connect((err) => {
  if (err) {
    console.log("Error de conexión:", err);
  } else {
    console.log("MySQL conectado");
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
            console.log(error);
          } else {
            console.log("Correo enviado:", info.response);
          }
        });

        res.send("Cotización enviada correctamente");
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
