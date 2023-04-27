const express = require("express");
const teams_bd = require("../db");

module.exports = {
  teams: function teams(req, res) {
    res.send(teams_bd.teams);
  },
  teams_post: function teams_post(req, res) {
    teams_bd.teams[req.body.id] = req.body;
    res.send("Estas en la pagina de teams a traves del metodo post");
  },
  teams_id: function teams_id(req, res) {
    const id = req.params.id.slic1e();
    for (const teams_key in teams_bd.teams) {
      if (id === teams_bd.teams[teams_key].id) {
        res.send(teams_bd.teams[teams_key]);
        return;
      }
    }
    res.send(`La busqueda del id ${id} no tiene resultados`);
  },
  teams_delete: function teams_delete(req, res) {
    const id = req.body.id;
    for (const teams_key in teams_bd.teams) {
      if (id === teams_bd.teams[teams_key].id) {
        delete teams_bd.teams[teams_key];
        res.send(`El team con la id: ${id} se ha eliminado exitosamenete`);
        return;
      }
    }
    res.send(`El team con la id ${id} no existe`);
  },
  teams_patch: function teams_patch(req, res) {
    const id = req.body.id;
    for (const teams_key in teams_bd.teams) {
      if (id === teams_bd.teams[teams_key].id) {
        teams_bd.teams[teams_key].name = req.body.name;
        teams_bd.teams[teams_key].flag = req.body.flag;
        console.log(teams_bd.teams[teams_key]);
        res.send(`El team con la id: ${id} se ha editado exitosamenete`);
        return;
      }
    }
    res.send(`El team con la id ${id} no existe`);
  },
};
