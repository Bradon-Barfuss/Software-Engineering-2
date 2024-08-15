const express = require("express")
const routes = express.Router();

routes.route("/session_set").get(async function (req, res){
    console.log("In /session_set, seeesion is: " + req.session)
    let status = ""
    if (!req.session.username){
        req.session.username = "Bradon"
        status = "Session set"
        console.log(status)
    } else{
        status = "Session already exists";
        console.log(status)
    }
    const resultObj = {status: status };

    res.json(resultObj)
})

routes.route("/session_get").get(async function (req, res){
    console.log("In /session_get, seeesion is: " + req.session)
    let status = ""
    if (!req.session.username){
        status = "No Session set"
        console.log(status)
    } else{
        status = "Session username is: " + req.session.username;
        console.log(status)
    }
    const resultObj = {status: status };

    res.json(resultObj)
})

routes.route("/session_delete").get(async function (req, res){
    console.log("In /session_delete, seeesion is: " + req.session)
    req.session.destroy();

    let status = "No session set"

    const resultObj = {status: status };

    res.json(resultObj)
})

module.exports = routes;