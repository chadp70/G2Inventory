const express = require('express');
const router = express.Router();

router.get('/items', (req, res) => {
    const str = [
        {
            "TAMCN": "H00162G",
            "AAC": "M20910",
            "SUC": "YS6_RADIO",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "ADAPTER,POWER SUPPL",
            "NIIN": "15976193",
            "Count_of_Serial_Number": "",
            "Sum_of_Quantity": "22",
            "Sum_of_Unit_Price": "$40,114.62",
            "ScannerID": "123456789"
          },
          {
            "TAMCN": "K00022B",
            "AAC": "M20910",
            "SUC": "YBOATS",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "ANALYZER-CHARGER,BA",
            "NIIN": "15109594",
            "Count_of_Serial_Number": "",
            "Sum_of_Quantity": "3",
            "Sum_of_Unit_Price": "$639.23",
            "ScannerID": "987654321"
          },
          {
            "TAMCN": "A02107G",
            "AAC": "M20910",
            "SUC": "YS6_RADIO",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "ANTENNA GROUP",
            "NIIN": "16750548",
            "Count_of_Serial_Number": "15",
            "Sum_of_Quantity": "15",
            "Sum_of_Unit_Price": "$56,940.00",
            "ScannerID": "NONE"
          },
          {
            "TAMCN": "A02117G",
            "AAC": "M20910",
            "SUC": "YS6_RADIO",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "ANTENNA GROUP",
            "NIIN": "16752889",
            "Count_of_Serial_Number": "15",
            "Sum_of_Quantity": "15",
            "Sum_of_Unit_Price": "$56,520.00",
            "ScannerID": "NONE"
          },
          {
            "TAMCN": "E00502E",
            "AAC": "M20910",
            "SUC": "YARM",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "BAYONET-KNIFE",
            "NIIN": "15216087",
            "Count_of_Serial_Number": "",
            "Sum_of_Quantity": "253",
            "Sum_of_Unit_Price": "$133.67",
            "ScannerID": "041167066201"
          },
          {
            "TAMCN": "Q10452G",
            "AAC": "M20910",
            "SUC": "YS6_RADIO",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "BEACON,DISTRESS",
            "NIIN": "16165705",
            "Count_of_Serial_Number": "229",
            "Sum_of_Quantity": "229",
            "Sum_of_Unit_Price": "$183,200.00",
            "ScannerID": "NONE"
          },
          {
            "TAMCN": "E01772B",
            "AAC": "M20910",
            "SUC": "YBCO",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "BINOCULAR",
            "NIIN": "14993547",
            "Count_of_Serial_Number": "",
            "Sum_of_Quantity": "160",
            "Sum_of_Unit_Price": "$402.00",
            "ScannerID": "NONE"
          },
          {
            "TAMCN": "C59017K",
            "AAC": "M20910",
            "SUC": "YBOATS",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "BOAT,LANDING,INFLAT",
            "NIIN": "15991756",
            "Count_of_Serial_Number": "20",
            "Sum_of_Quantity": "20",
            "Sum_of_Unit_Price": "$210,000.00",
            "ScannerID": "NONE"
          },
          {
            "TAMCN": "C44332E",
            "AAC": "M20910",
            "SUC": "YACO",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "BOX,SHIPPING",
            "NIIN": "13540797",
            "Count_of_Serial_Number": "1",
            "Sum_of_Quantity": "1",
            "Sum_of_Unit_Price": "$2,546.72",
            "ScannerID": "NONE"
          },
          {
            "TAMCN": "C44312E",
            "AAC": "M20910",
            "SUC": "YBOATS",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "BOX,SHIPPING",
            "NIIN": "13713690",
            "Count_of_Serial_Number": "1",
            "Sum_of_Quantity": "1",
            "Sum_of_Unit_Price": "$2,290.78",
            "ScannerID": "NONE"
          },
          {
            "TAMCN": "Q00062G",
            "AAC": "M20910",
            "SUC": "YBCO",
            "Account_Number": "UIC-M20910",
            "Nomenclature": "CAMERA,RECONNAISSAN",
            "NIIN": "16497974",
            "Count_of_Serial_Number": "51",
            "Sum_of_Quantity": "51",
            "Sum_of_Unit_Price": "$851,691.84",
            "ScannerID": "NONE"
          }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;