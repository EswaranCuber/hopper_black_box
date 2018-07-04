/*jslint node: true, nomen: true*/
"use strict";
module.exports = function (logger, config) {
	var funcs = {};
	
	funcs.getUsers = function (cb) {
		var saltieList = {
			"tripList": [
			  {
				"tripId": "69426",
				"tripName": "Caribbean",
				"tripLength": "FEW DAYS",
				"startDestination": "Genoa",
				"startingFrom": 20181103,
				"itineraryImage": "map_3.png",
				"itineraryDesc": "NA",
				"tripDesc": "1 Night Cruise From Genoa",
				"priceFrom": "69",
				"noNight": "1",
				"noOfSailing": 1,
				"shipName": "MSC Opera",
				"anyOffer": true,
				"promotions": "100170262",
				"destinationImage": [
				  [
					"default_1.jpg"
				  ]
				],
				"itineraryDate": [],
				"cruiseLineName": "MSC Cruises",
				"offers": []
			  },
			  {
				"tripId": "69391",
				"tripName": "Caribbean",
				"tripLength": "FEW DAYS",
				"startDestination": "Genoa",
				"startingFrom": 20181103,
				"itineraryImage": "map_3.png",
				"itineraryDesc": "NA",
				"tripDesc": "2 Night Cruise From Genoa",
				"priceFrom": "89",
				"noNight": "2",
				"noOfSailing": 1,
				"shipName": "MSC Opera",
				"anyOffer": true,
				"promotions": "100170262",
				"destinationImage": [
				  [
					"default_1.jpg"
				  ]
				],
				"itineraryDate": [],
				"cruiseLineName": "MSC Cruises",
				"offers": []
			  },
			  {
				"tripId": "63758",
				"tripName": "Bahamas",
				"tripLength": "FEW DAYS",
				"startDestination": "Miami",
				"startingFrom": 20190510,
				"itineraryImage": "MIA_NAS_MIA.png",
				"itineraryDesc": "NA",
				"tripDesc": "3 Night Cruise From Miami",
				"priceFrom": "90",
				"noNight": "3",
				"noOfSailing": 50,
				"shipName": "Carnival Victory",
				"anyOffer": true,
				"promotions": "100170262",
				"destinationImage": [
				  [
					"MIA_8.jpg"
				  ]
				],
				"itineraryDate": [],
				"cruiseLineName": "Carnival",
				"offers": []
			  },
			  {
				"tripId": "6680",
				"tripName": "Bahamas",
				"tripLength": "FEW DAYS",
				"startDestination": "Miami",
				"startingFrom": 20180820,
				"itineraryImage": "MIA_HFC_NAS_MIA.png",
				"itineraryDesc": "NA",
				"tripDesc": "4 Night Cruise From Miami",
				"priceFrom": "90",
				"noNight": "4",
				"noOfSailing": 8,
				"shipName": "Carnival Victory",
				"anyOffer": true,
				"promotions": "100170262",
				"destinationImage": [
				  [
					"EYW_1.jpg"
				  ]
				],
				"itineraryDate": [],
				"cruiseLineName": "Carnival",
				"offers": []
			  },
			  {
				"tripId": "6679",
				"tripName": "Caribbean - Western",
				"tripLength": "FEW DAYS",
				"startDestination": "Miami",
				"startingFrom": 20180709,
				"itineraryImage": "MIA_EYW_CZM_MIA.png",
				"itineraryDesc": "NA",
				"tripDesc": "4 Night Cruise From Miami",
				"priceFrom": "90",
				"noNight": "4",
				"noOfSailing": 82,
				"shipName": "Carnival Victory",
				"anyOffer": true,
				"promotions": "100170262",
				"destinationImage": [
				  [
					"MIA_5_R.jpg"
				  ]
				],
				"itineraryDate": [],
				"cruiseLineName": "Carnival",
				"offers": []
			  },
			  {
				"tripId": "43801",
				"tripName": "Bahamas",
				"tripLength": "FEW DAYS",
				"startDestination": "Cape Canaveral",
				"startingFrom": 20180715,
				"itineraryImage": "PCN_NAS_FPO_PCN.png",
				"itineraryDesc": "NA",
				"tripDesc": "4 Night Cruise From Cape Canaveral",
				"priceFrom": "100",
				"noNight": "4",
				"noOfSailing": 47,
				"shipName": "Carnival Liberty",
				"anyOffer": true,
				"promotions": "100170262",
				"destinationImage": [
				  [
					"FPO_1_R.jpg"
				  ]
				],
				"itineraryDate": [],
				"cruiseLineName": "Carnival",
				"offers": []
			  },
			  {
				"tripId": "45665",
				"tripName": "Bahamas",
				"tripLength": "FEW DAYS",
				"startDestination": "Cape Canaveral",
				"startingFrom": 20180708,
				"itineraryImage": "PCN_NAS_PCS_PCN.png",
				"itineraryDesc": "NA",
				"tripDesc": "4 Night Cruise From Cape Canaveral",
				"priceFrom": "100",
				"noNight": "4",
				"noOfSailing": 31,
				"shipName": "Carnival Liberty",
				"anyOffer": true,
				"promotions": "100170262",
				"destinationImage": [
				  [
					"PCN_2.jpg"
				  ]
				],
				"itineraryDate": [],
				"cruiseLineName": "Carnival",
				"offers": []
			  },
			  {
				"tripId": "21713",
				"tripName": "Bahamas",
				"tripLength": "FEW DAYS",
				"startDestination": "Miami",
				"startingFrom": 20180706,
				"itineraryImage": "MIA_NAS_MIA.png",
				"itineraryDesc": "NA",
				"tripDesc": "3 Night Cruise From Miami",
				"priceFrom": "105",
				"noNight": "3",
				"noOfSailing": 41,
				"shipName": "Carnival Victory",
				"anyOffer": true,
				"promotions": "100170262",
				"destinationImage": [
				  [
					"MIA_3_R.jpg"
				  ]
				],
				"itineraryDate": [],
				"cruiseLineName": "Carnival",
				"offers": []
			  },
			  {
				"tripId": "50976",
				"tripName": "Bahamas",
				"tripLength": "FEW DAYS",
				"startDestination": "Cape Canaveral",
				"startingFrom": 20191125,
				"itineraryImage": "PCN_NAS_HFC_PCN.png",
				"itineraryDesc": "NA",
				"tripDesc": "4 Night Cruise From Cape Canaveral",
				"priceFrom": "110",
				"noNight": "4",
				"noOfSailing": 7,
				"shipName": "Carnival Liberty",
				"anyOffer": true,
				"promotions": "100170262",
				"destinationImage": [
				  [
					"HFC_1_R.jpg"
				  ]
				],
				"itineraryDate": [],
				"cruiseLineName": "Carnival",
				"offers": []
			  },
			  {
				"tripId": "68686",
				"tripName": "Bahamas",
				"tripLength": "ONE WEEK",
				"startDestination": "Jacksonville",
				"startingFrom": 20191118,
				"itineraryImage": "JAX_HFC_NAS_JAX.png",
				"itineraryDesc": "NA",
				"tripDesc": "5 Night Cruise From Jacksonville",
				"priceFrom": "110",
				"noNight": "5",
				"noOfSailing": 1,
				"shipName": "Carnival Ecstasy",
				"anyOffer": true,
				"promotions": "100170262",
				"destinationImage": [
				  [
					"JAX_1.jpg"
				  ]
				],
				"itineraryDate": [],
				"cruiseLineName": "Carnival",
				"offers": []
			  }
			],
			"tripCount": 10,
			"AllCount": 1541,
			"TotalSailing": 6767,
			"favourite": []
		  };
		logger.info('Returning Saltie list', saltieList);
		cb(null, saltieList);
	};
	
	return funcs;
};