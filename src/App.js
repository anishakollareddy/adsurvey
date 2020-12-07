import React, { Component } from 'react';
import * as Survey from 'survey-react'
import './App.css';
import Title from './Title';
import "survey-react/survey.css";


const sendDataToServer = (survey) => {
  // var resultAsString = JSON.stringify(survey.data);
  survey.sendResult('63376b27-fb10-486c-8434-f98223fcda09'); // unique id tied to survey created on surveyjs.io
  // alert(resultAsString); //send Ajax request to your web server.
}

// function sendDataToServer(survey) {
//     survey.sendResult('53686cf7-ae4d-4339-a535-dd33507b0f16');
// }





class App extends Component {
  render() {
    // Survey.Survey.cssType = "bootstrap";
    // // Survey.Survey.StylesManager.applyTheme("modern");

    // const model = new Survey.Model({surveyId: 'cde59f7b-13cf-43d2-ac21-77d7330465e6'}); // surveyId is pulled from online survey created on surveyjs.io. The model is imported.
    
    // Survey.StylesManager.applyTheme("modern");
    var surveyJSON = //{ surveyId: 'cde59f7b-13cf-43d2-ac21-77d7330465e6', surveyPostId: '63376b27-fb10-486c-8434-f98223fcda09'}
    {
      "pages": [
       {
        "name": "page1",
        "elements": [
         {
          "type": "text",
          "name": "Please type your full name below.",
          "valueName": "Please type your full name below",
          "isRequired": true,
          "placeHolder": "John Smith"
         },
         {
          "type": "text",
          "name": "Please enter your authentication code below.",
          "title": "Please enter your date of birth below.",
          "valueName": "Please enter your authentication code below",
          "isRequired": true,
          "inputType": "date",
          "placeHolder": "12w4ex92"
         }
        ]
       },
       {
        "name": "page2",
        "elements": [
         {
          "type": "imagepicker",
          "name": "question1",
          "title": "Please select 5 items below from your preference (Note: Each item includes title, brand, and listed retail price in USD)",
          "isRequired": true,
          "choices": [
           {
            "value": "1",
            "text": "Name: Kyocera 1T02LX0US0 Model TK-352 Toner Kit for FS-C5150DN Printer, Genuine Kyocera, Up To 15000 Pages, Black Color ; Brand: Kyocera; Price: 57.35",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/614q1fj8M3L._AC_SL1000_.jpg"
           },
           {
            "value": "2",
            "text": "Name: Displays2go Sidewalk Sign with Water-Filled Base, Free-Standing, Double-Sided for Indoor/Outdoor Use - Silver (SBD2059); Brand: Displays2go; Price: 170.79",
            "imageLink": "https://cdn.displays2go.com/images/zoom/ps1536blk.rw_preview.jpg"
           },
           {
            "value": "3",
            "text": "Name: Tombow Mono Graph Shaker Mechanical Pencil 0.5mm, Red Body (SH-MG31); Brand: Tombow; Price: 170.79",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/71oooO2KltL._AC_SY879_.jpg"
           },
           {
            "value": "4",
            "text": "Name: Pilot Frixion Eraser Yellow Green (ELF-10-YG); Brand: Pilot; Price: 5.28",
            "imageLink": "https://m.media-amazon.com/images/I/31ieB-DMzAL.jpg"
           },
           {
            "value": "5",
            "text": "Name: Cross Apogee, Limited Edition, Brushed Chrome, Selectip Rolling Ball Pen (AT0125-18); Brand: Cross; Price: 39.95",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/61LRO195MvL._SL1500_.jpg"
           },
           {
            "value": "6",
            "text": "Name: Cisco CTS-SX20PHD2.5X-K9 TelePresence System SX20 Quick Set with Precision HD 1080p 2.5x Camera - Video conferencing kit; Brand: Cisco; Price: 89.45",
            "imageLink": "https://cdn.shopify.com/s/files/1/0074/1667/6404/products/CTS-SX20PHD2.5X-K9_800x.jpg?v=1555681748"
           },
           {
            "value": "7",
            "text": "Name: Schneider ID Fountain Pen for Left-Handed Writers Black and Chrome; Brand: Schneider; Price: 4.39",
            "imageLink": "https://m.media-amazon.com/images/I/511fnsF28XL._AC_SS350_.jpg"
           },
           {
            "value": "8",
            "text": "Name: 167 Sets NCR Paper, 3 Part, Legal Size Straight Collated Carbonless Paper (501 Sheets - 3 Part); Brand: NCR; Price: 40.83",
            "imageLink": "https://i5.walmartimages.com/asr/426f3665-4d20-47c9-a822-84a728aa1862_1.f3eff7a75e9e63927bc0142cbca04242.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
           },
           {
            "value": "9",
            "text": "Name:  BAZIC 1&quot; Matte Color Poly 3-Ring Binder w/ Pocket for School, Home, or Office (Case of 48) ; Brand: Bazic; Price: 61.49",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/71OSdExVi8L._AC_SY355_.jpg"
           },
           {
            "value": "10",
            "text": "Name: Mead Cambridge Notebook/Journal, Pink Floral, 8 1/2&quot; x 5 1/2&quot;, 48 Ruled Sheets, Trucco (59032) ; Brand: Mead; Price: 11.41",
            "imageLink": "https://m.media-amazon.com/images/I/91X43cX7MsL.jpg"
           },
           {
            "value": "11",
            "text": "Name: Aegis Labels - 12 Rolls DYMO 30336 Compatible Multipurpose 1&rdquo; X 2-1/8&rdquo; Address &amp; UPC Barcodes Replacement Labels for LW Labelwriter 450, 450 Turbo, 4XL (500/Roll); Brand: Aegis Premium Labels; Price: 21.9",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/81skAiPbuGL._AC_SY355_.jpg"
           },
           {
            "value": "12",
            "text": "Name: Amram Fine Tagging Attachments 3&quot;, 50/Clip, 5,000/box, Natura; Brand: AMRAM; Price: 1.96",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/81skAiPbuGL._AC_SY355_.jpg"
           },
           {
            "value": "13",
            "text": "Name: Conklin Duragraph Amber Ballpoint (CK71345); Brand: Conklin; Price: 30.03",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/61vZ5ols07L._AC_SY355_.jpg"
           },
           {
            "value": "14",
            "text": "Name: Calitoner Remanufactured Toner Cartridge Replacement for HP 131A ( Black,Cyan,Magenta,Yellow , 4-Pack ); Brand: Calitoner; Price: 42.99",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/6125SHd7OOL._AC_SY355_.jpg"
           },
           {
            "value": "15",
            "text": "Name: KOSHA feather bookmark, Pearly White varnish on stainless steel base. In gift-box. Metal bookmarks for books. Gifts for men and women, younger and seniors.; Brand: KOSHA; Price: 59",
            "imageLink": "https://images-eu.ssl-images-amazon.com/images/I/412XUSvfMtL.jpg"
           }
          ],
          "choicesOrder": "random",
          "showLabel": true,
          "multiSelect": true
         }
        ],
        "title": "Select 5 items from below."
       },
       {
        "name": "page3",
        "elements": [
         {
          "type": "radiogroup",
          "name": "What is your gender?",
          "isRequired": true,
          "choices": [
           "Male",
           "Female",
           "Other",
           "Prefer not to answer"
          ]
         },
         {
          "type": "rating",
          "name": "What percent of your shopping do you do online?",
          "isRequired": true,
          "rateValues": [
           "0%",
           "25%",
           "50%",
           "75%",
           "100%"
          ]
         },
         {
          "type": "text",
          "name": "What website do you primarily use to shop online? (If none type N/A)",
          "isRequired": true,
          "placeHolder": "Amazon"
         },
         {
          "type": "html",
          "name": "Please the video below to be prepared for the next questions.",
          "html": "<p>Please the video below to be prepared for the next questions.<br></p><p><iframe frameborder=\"0\" src=\"//www.youtube.com/embed/hnpQrMqDoqE\" width=\"640\" height=\"360\" class=\"note-video-clip\"></iframe><br></p>"
         },
         {
          "type": "rating",
          "name": "Rate your stress levels pre-Covid verus now.",
          "valueName": "Rate your stress levels pre-Covid verus now",
          "isRequired": true,
          "rateValues": [
           "Less Stressed Now",
           "Same Stress Level",
           "More Stressed Now"
          ]
         }
        ]
       },
       {
        "name": "page4",
        "elements": [
         {
          "type": "imagepicker",
          "name": "question2",
          "title": "Please select 5 items below from your preference (Note: Each item includes title, brand, and listed retail price in USD)",
          "isRequired": true,
          "choices": [
           {
            "value": "16",
            "text": "Name: Kaweco ELEGANCE Fountain pen, Nib B; Brand: Kaweco; Price: 95.4",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/51bg7s3ECpL._AC_SL1500_.jpg"
           },
           {
            "value": "17",
            "text": "Name: SAN65870 - Uni-ball 207 Impact Roller Ball Retractable Gel Pen; Brand: Uni-ball; Price: 5.75",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/61wVGa21UOL._SL1500_.jpg"
           },
           {
            "value": "18",
            "text": "Name: Monteverde Capless Ceramic Gel Refill For Parker Pens, Blue (P442Bu); Brand: Monteverde; Price: 6.4",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/61yTGbzxX3L._AC_SX466_.jpg"
           },
           {
            "value": "19",
            "text": "Name: Assorted Father's Day Greeting Cards 30 Pack; Brand: Harnel; Price: 20.95",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/81HrESfdYKL._AC_SL1263_.jpg"
           },
           {
            "value": "20",
            "text": "Name: Hello Kitty Id Badge Reel Purple and Clear; Brand: Sizzle City; Price: 11.99",
            "imageLink": "https://i1.wp.com/sizzlecity.com/wp-content/uploads/2013/02/hello-kitty-badge.jpg?fit=640%2C731&ssl=1"
           },
           {
            "value": "21",
            "text": "Name: DYQWT A Pairs Violin Book Nonskid Bookends Art Bookend Gift (Black 1 style); Brand: DYQWT; Price: 11.99",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/51WRZV4qwiL._SL1001_.jpg"
           },
           {
            "value": "22",
            "text": "Name: StoreSMART - 4&quot; x 6&quot; Peel &amp; Stick Pockets - Open Short Side - 25 Pack - STB1888S-25; Brand: StoreSMART; Price: 23.75",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/31Pvti%2B0CAL._AC_.jpg"
           },
           {
            "value": "23",
            "text": "Name: S.P. Richards Company Secure Key Cabinet, 10 x 3 x 12 Inches, 60 Keys, Gray (SPR15602); Brand: Sparco; Price: 4",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/71hYiidEGjL._AC_SL1500_.jpg"
           },
           {
            "value": "24",
            "text": "Name: Sharpie 44002 Magnum Permanent Marker, Red; Brand: Sharpie; Price: 2.23",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/81zE7vGN6rL._AC_SY355_.jpg"
           },
           {
            "value": "25",
            "text": "Name: MACO Laser/Ink Jet White Internet Shipping Labels, 5-1/2 x 8-1/2 Inches, 2 Per Sheet, 500 Per Box (ML-0200B); Brand: Maco; Price: 29.72",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/61kyxPFDl9L._AC_SX466_.jpg"
           },
           {
            "value": "26",
            "text": "Name: Finders Key Purse Ruby Heart Key Chain; Brand: Finders Key Purse; Price: 9.99",
            "imageLink": "https://cdn.shopify.com/s/files/1/2714/8272/products/RubyHeartBling_900x.jpg?v=1587508880"
           },
           {
            "value": "27",
            "text": "Name: Speedy Inks - 2 pack TN-210BK black Premium Compatible with Brother Toner Cartridge for use in HL-3040CN, HL3070CW, MFC-9010CN, MFC-9120CN, and MFC-9320CW.; Brand: Speedy Inks; Price: 25.99 ",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/712DV39xIBL._AC_SL1500_.jpg"
           },
           {
            "value": "28",
            "text": "Name: Sharpie Permanent Markers, Ultra Fine Point, Black, 12-Count; Brand: Sharpie; Price: 12.99",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/8102L6%2BE9FL._AC_SL1500_.jpg"
           },
           {
            "value": "29",
            "text": "Name: Maped Stop System Compass 3 Piece Set (196100); Brand: Maped Helix USA; Price: 7",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/41th4xfnIUL._AC_.jpg"
           },
           {
            "value": "30",
            "text": "Name: New Compatible Canon 104 Toner Cartridge-Black; Brand: V4INK; Price: 13.98",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/710V0e1vd4L._AC_SL1500_.jpg"
           }
          ],
          "showLabel": true,
          "multiSelect": true
         }
        ],
        "title": "Select 5 items from below."
       }
      ]
     }

    return (
      <div className="App">
        <Title />
        <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />
      </div>
    );
  }
}

export default App;
