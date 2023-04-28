const express = require("express");
const { teams: teams_2 } = require("../db");

module.exports = {
  teams: function teams(req, res) {
    res.json(teams_2);
  },
  teams_post: function teams_post(req, res) {
    const { id, name, flag } = req.body; // de esta forma podemos aumentar la seguridad sobre los datos que se nos envian
    teams_2[id] = { id, name, flag };
    console.log(req.body);
    res.json(teams_2);
  },
  teams_id: function teams_id(req, res) {
    const id = req.params.id;
    if (id === teams_2[id].id) {
      res.json(teams_2[id]);
      return;
    }
    res.send(`La busqueda del id ${id} no tiene resultados`);
  },

  //Cambiar esto para que no envie un json, sino que se envie la id a traves de la URL
  teams_delete: function teams_delete(req, res) {
    const id = req.body.id;
    for (const teams_key in teams_2) {
      if (id === teams_2[teams_key].id) {
        s;
        delete teams_2[teams_key];
        res.json(teams_2);
        return;
      }
    }
    res.send(`El team con la id ${id} no existe`);
  },

  // COmprobar que esto funciona en el caso de qe que solamente se envie un dato adicional en vez de los dos
  teams_patch: function teams_patch(req, res) {
    const id = req.body.id;
    for (const teams_key in teams_2) {
      if (id === teams_2[teams_key].id) {
        teams_2[teams_key].name = req.body.name;
        teams_2[teams_key].flag = req.body.flag;
        console.log(teams_2[teams_key]);
        res.json(teams_2);
        return;
      }
    }
    res.send(`El team con la id ${id} no existe`);
  },
};
