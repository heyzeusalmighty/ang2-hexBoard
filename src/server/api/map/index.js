'use strict';

var express = require('express');

var router = express.Router();

//router.get('/:search', controller.index);

router.get('/:id', getMapData);


module.exports = router;

function getMapData(req, res) {
    let playerId = req.params.id;
    res.send(response);
}



const response = {
	"players": [{
		"_id": 1,
		"username": "Leonardo",
		"gameId": 1,
		"discColor": "blue",
		"currentOrange": 3,
		"currentBrown": 3,
		"currentPink": 3,
		"orangeIncome": 3,
		"brownIncome": 3,
		"pinkIncome": 3,
		"pass": false,
		"turnOrder": 1,
		"totalDiscs": 13,
		"availableDiscs": 13,
		"availableColonyShips": 3,
		"passOrder": 0,
		"whosTurn": true,
		"exploreDiscCount": null,
		"influenceDiscCount": null,
		"researchDiscCount": null,
		"upgradeDiscCount": null,
		"buildDiscCount": null,
		"moveDiscCount": null,
		"species": "Terran"
	},
	{
		"_id": 6,
		"username": "Casey Jones",
		"gameId": 1,
		"discColor": "red",
		"currentOrange": 3,
		"currentBrown": 3,
		"currentPink": 3,
		"orangeIncome": 3,
		"brownIncome": 3,
		"pinkIncome": 3,
		"pass": false,
		"turnOrder": 6,
		"totalDiscs": 13,
		"availableDiscs": 13,
		"availableColonyShips": 3,
		"passOrder": 0,
		"whosTurn": false,
		"exploreDiscCount": null,
		"influenceDiscCount": null,
		"researchDiscCount": null,
		"upgradeDiscCount": null,
		"buildDiscCount": null,
		"moveDiscCount": null,
		"species": "Terran"
	},
	{
		"_id": 2,
		"username": "Donatello",
		"gameId": 1,
		"discColor": "green",
		"currentOrange": 3,
		"currentBrown": 3,
		"currentPink": 3,
		"orangeIncome": 3,
		"brownIncome": 3,
		"pinkIncome": 3,
		"pass": false,
		"turnOrder": 2,
		"totalDiscs": 13,
		"availableDiscs": 13,
		"availableColonyShips": 3,
		"passOrder": 0,
		"whosTurn": false,
		"exploreDiscCount": null,
		"influenceDiscCount": null,
		"researchDiscCount": null,
		"upgradeDiscCount": null,
		"buildDiscCount": null,
		"moveDiscCount": null,
		"species": "Terran"
	},
	{
		"_id": 3,
		"username": "Raphael",
		"gameId": 1,
		"discColor": "yellow",
		"currentOrange": 3,
		"currentBrown": 3,
		"currentPink": 3,
		"orangeIncome": 3,
		"brownIncome": 3,
		"pinkIncome": 3,
		"pass": false,
		"turnOrder": 3,
		"totalDiscs": 13,
		"availableDiscs": 13,
		"availableColonyShips": 3,
		"passOrder": 0,
		"whosTurn": false,
		"exploreDiscCount": null,
		"influenceDiscCount": null,
		"researchDiscCount": null,
		"upgradeDiscCount": null,
		"buildDiscCount": null,
		"moveDiscCount": null,
		"species": "Terran"
	},
	{
		"_id": 4,
		"username": "Michaelangelo",
		"gameId": 1,
		"discColor": "white",
		"currentOrange": 3,
		"currentBrown": 3,
		"currentPink": 3,
		"orangeIncome": 3,
		"brownIncome": 3,
		"pinkIncome": 3,
		"pass": false,
		"turnOrder": 4,
		"totalDiscs": 13,
		"availableDiscs": 13,
		"availableColonyShips": 3,
		"passOrder": 0,
		"whosTurn": false,
		"exploreDiscCount": null,
		"influenceDiscCount": null,
		"researchDiscCount": null,
		"upgradeDiscCount": null,
		"buildDiscCount": null,
		"moveDiscCount": null,
		"species": "Terran"
	},
	{
		"_id": 5,
		"username": "Splinter",
		"gameId": 1,
		"discColor": "black",
		"currentOrange": 3,
		"currentBrown": 3,
		"currentPink": 3,
		"orangeIncome": 3,
		"brownIncome": 3,
		"pinkIncome": 3,
		"pass": false,
		"turnOrder": 5,
		"totalDiscs": 13,
		"availableDiscs": 13,
		"availableColonyShips": 3,
		"passOrder": 0,
		"whosTurn": false,
		"exploreDiscCount": null,
		"influenceDiscCount": null,
		"researchDiscCount": null,
		"upgradeDiscCount": null,
		"buildDiscCount": null,
		"moveDiscCount": null,
		"species": "Terran"
	}],
	"mapTiles": [{
		"_id": 42,
		"mapId": 234,
		"x": 4,
		"y": 4,
		"division": 2,
		"orange": 1,
		"brown": 1,
		"pink": 1,
		"orangeAdvanced": 1,
		"brownAdvanced": 0,
		"pinkAdvanced": 1,
		"white": 0,
		"victoryPoints": 3,
		"wormholes": [1,
		1,
		0,
		1,
		1,
		0],
		"aliens": 0,
		"occupied": "white",
		"reward": false,
		"playerId": 4,
		"orangeUsed": null,
		"brownUsed": null,
		"pinkUsed": null,
		"whiteUsed": null,
		"sortOrder": null,
		"revealed": true,
		"gameId": 1,
		"wormholeIndex": null
	},
	{
		"_id": 38,
		"mapId": 230,
		"x": 8,
		"y": 6,
		"division": 2,
		"orange": 1,
		"brown": 1,
		"pink": 1,
		"orangeAdvanced": 1,
		"brownAdvanced": 0,
		"pinkAdvanced": 1,
		"white": 0,
		"victoryPoints": 3,
		"wormholes": [1,
		1,
		0,
		1,
		1,
		0],
		"aliens": 0,
		"occupied": "blue",
		"reward": false,
		"playerId": 1,
		"orangeUsed": null,
		"brownUsed": null,
		"pinkUsed": null,
		"whiteUsed": null,
		"sortOrder": null,
		"revealed": true,
		"gameId": 1,
		"wormholeIndex": null
	},
	{
		"_id": 39,
		"mapId": 231,
		"x": 6,
		"y": 7,
		"division": 2,
		"orange": 1,
		"brown": 1,
		"pink": 1,
		"orangeAdvanced": 1,
		"brownAdvanced": 0,
		"pinkAdvanced": 1,
		"white": 0,
		"victoryPoints": 3,
		"wormholes": [1,
		1,
		0,
		1,
		1,
		0],
		"aliens": 0,
		"occupied": "red",
		"reward": false,
		"playerId": 6,
		"orangeUsed": null,
		"brownUsed": null,
		"pinkUsed": null,
		"whiteUsed": null,
		"sortOrder": null,
		"revealed": true,
		"gameId": 1,
		"wormholeIndex": null
	},
	{
		"_id": 40,
		"mapId": 232,
		"x": 8,
		"y": 4,
		"division": 2,
		"orange": 1,
		"brown": 1,
		"pink": 1,
		"orangeAdvanced": 1,
		"brownAdvanced": 0,
		"pinkAdvanced": 1,
		"white": 0,
		"victoryPoints": 3,
		"wormholes": [1,
		1,
		0,
		1,
		1,
		0],
		"aliens": 0,
		"occupied": "green",
		"reward": false,
		"playerId": 2,
		"orangeUsed": null,
		"brownUsed": null,
		"pinkUsed": null,
		"whiteUsed": null,
		"sortOrder": null,
		"revealed": true,
		"gameId": 1,
		"wormholeIndex": null
	},
	{
		"_id": 41,
		"mapId": 233,
		"x": 4,
		"y": 6,
		"division": 2,
		"orange": 1,
		"brown": 1,
		"pink": 1,
		"orangeAdvanced": 1,
		"brownAdvanced": 0,
		"pinkAdvanced": 1,
		"white": 0,
		"victoryPoints": 3,
		"wormholes": [1,
		1,
		0,
		1,
		1,
		0],
		"aliens": 0,
		"occupied": "yellow",
		"reward": false,
		"playerId": 3,
		"orangeUsed": null,
		"brownUsed": null,
		"pinkUsed": null,
		"whiteUsed": null,
		"sortOrder": null,
		"revealed": true,
		"gameId": 1,
		"wormholeIndex": null
	},
	{
		"_id": 43,
		"mapId": 235,
		"x": 6,
		"y": 3,
		"division": 2,
		"orange": 1,
		"brown": 1,
		"pink": 1,
		"orangeAdvanced": 1,
		"brownAdvanced": 0,
		"pinkAdvanced": 1,
		"white": 0,
		"victoryPoints": 3,
		"wormholes": [1,
		1,
		0,
		1,
		1,
		0],
		"aliens": 0,
		"occupied": "black",
		"reward": false,
		"playerId": 5,
		"orangeUsed": null,
		"brownUsed": null,
		"pinkUsed": null,
		"whiteUsed": null,
		"sortOrder": null,
		"revealed": true,
		"gameId": 1,
		"wormholeIndex": null
	}],
	"counts": {
		"divisionOne": 8,
		"divisionTwo": 11,
		"divisionThree": 18
	},
	"status": {
		"_id": 1,
		"playerId": 1,
		"playerName": "Leonardo",
		"gameId": 1,
		"turnStarted": false,
		"action": null,
		"turnOver": null,
		"mapId": null,
		"pass": null,
		"exTileChosen": null,
		"exInfluenced": null,
		"exRewardRevealed": null,
		"exRewardChosen": null,
		"exResourceSet": null,
		"influenceStarted": null,
		"influenceOne": null,
		"influenceTwo": null,
		"researchTileChosen": null
	},
	"ships": [{
		"shipId": 1,
		"xCoords": 8,
		"yCoords": 6,
		"playerId": 1,
		"color": "blue",
		"shipType": "interceptor",
		"components": [{
			"_id": 103,
			"modelId": 1,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 104,
			"modelId": 1,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 105,
			"modelId": 1,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 1
	},
	{
		"shipId": 2,
		"xCoords": 8,
		"yCoords": 6,
		"playerId": 1,
		"color": "blue",
		"shipType": "interceptor",
		"components": [{
			"_id": 103,
			"modelId": 1,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 104,
			"modelId": 1,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 105,
			"modelId": 1,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 1
	},
	{
		"shipId": 3,
		"xCoords": 6,
		"yCoords": 7,
		"playerId": 6,
		"color": "red",
		"shipType": "interceptor",
		"components": [{
			"_id": 106,
			"modelId": 5,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 107,
			"modelId": 5,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 108,
			"modelId": 5,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 5
	},
	{
		"shipId": 4,
		"xCoords": 6,
		"yCoords": 7,
		"playerId": 6,
		"color": "red",
		"shipType": "interceptor",
		"components": [{
			"_id": 106,
			"modelId": 5,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 107,
			"modelId": 5,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 108,
			"modelId": 5,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 5
	},
	{
		"shipId": 5,
		"xCoords": 8,
		"yCoords": 4,
		"playerId": 2,
		"color": "green",
		"shipType": "interceptor",
		"components": [{
			"_id": 109,
			"modelId": 9,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 110,
			"modelId": 9,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 111,
			"modelId": 9,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 9
	},
	{
		"shipId": 6,
		"xCoords": 8,
		"yCoords": 4,
		"playerId": 2,
		"color": "green",
		"shipType": "interceptor",
		"components": [{
			"_id": 109,
			"modelId": 9,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 110,
			"modelId": 9,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 111,
			"modelId": 9,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 9
	},
	{
		"shipId": 7,
		"xCoords": 4,
		"yCoords": 6,
		"playerId": 3,
		"color": "yellow",
		"shipType": "interceptor",
		"components": [{
			"_id": 112,
			"modelId": 13,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 113,
			"modelId": 13,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 114,
			"modelId": 13,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 13
	},
	{
		"shipId": 10,
		"xCoords": 4,
		"yCoords": 6,
		"playerId": 3,
		"color": "yellow",
		"shipType": "interceptor",
		"components": [{
			"_id": 112,
			"modelId": 13,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 113,
			"modelId": 13,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 114,
			"modelId": 13,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 13
	},
	{
		"shipId": 8,
		"xCoords": 4,
		"yCoords": 4,
		"playerId": 4,
		"color": "white",
		"shipType": "interceptor",
		"components": [{
			"_id": 115,
			"modelId": 17,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 116,
			"modelId": 17,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 117,
			"modelId": 17,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 17
	},
	{
		"shipId": 9,
		"xCoords": 6,
		"yCoords": 3,
		"playerId": 5,
		"color": "black",
		"shipType": "interceptor",
		"components": [{
			"_id": 118,
			"modelId": 21,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 119,
			"modelId": 21,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 120,
			"modelId": 21,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 21
	},
	{
		"shipId": 11,
		"xCoords": 4,
		"yCoords": 4,
		"playerId": 4,
		"color": "white",
		"shipType": "interceptor",
		"components": [{
			"_id": 115,
			"modelId": 17,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 116,
			"modelId": 17,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 117,
			"modelId": 17,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 17
	},
	{
		"shipId": 12,
		"xCoords": 6,
		"yCoords": 3,
		"playerId": 5,
		"color": "black",
		"shipType": "interceptor",
		"components": [{
			"_id": 118,
			"modelId": 21,
			"componentId": 4,
			"componentName": "Nuclear Source"
		},
		{
			"_id": 119,
			"modelId": 21,
			"componentId": 5,
			"componentName": "Nuclear Drive"
		},
		{
			"_id": 120,
			"modelId": 21,
			"componentId": 1,
			"componentName": "Ion Cannon"
		}],
		"stats": {
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"modelId": 21
	}]
}