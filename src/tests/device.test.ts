import DeviceDetector from "../";
import { loadTests } from "../utils/yaml-loader";
import { DeviceTests, DeviceTest, GenericDeviceResult } from "../typings/device";
import { get } from "lodash";

const cameraTests: DeviceTests = loadTests("Parser/Devices/fixtures/camera");
const carTests: DeviceTests = loadTests("Parser/Devices/fixtures/car_browser");
const consoleTests: DeviceTests = loadTests("Parser/Devices/fixtures/console");

const deviceDetector = new DeviceDetector();
// TODO: share the same list between the vendor fragment test and this file
const brands: { [key: string]: string; } = {"3Q":"3Q","4G":"4Good","AC":"Acer","AZ":"Ainol","AI":"Airness","AW":"Aiwa","AL":"Alcatel","A2":"Allview","A1":"Altech UEC","AN":"Arnova","KN":"Amazon","AO":"Amoi","AP":"Apple","AR":"Archos","AS":"ARRIS","AT":"Airties","AU":"Asus","AV":"Avvio","AX":"Audiovox","AY":"Axxion","AM":"Azumi Mobile","BB":"BBK","BE":"Becker","BI":"Bird","BT":"Bitel","BG":"BGH","BL":"Beetel","BP":"Blaupunkt","BM":"Bmobile","BN":"Barnes & Noble","BO":"BangOlufsen","BQ":"BenQ","BS":"BenQ-Siemens","BU":"Blu","B2":"Blackview","BW":"Boway","BX":"bq","BV":"Bravis","BR":"Brondi","B1":"Bush","CB":"CUBOT","CF":"Carrefour","CP":"Captiva","CS":"Casio","CA":"Cat","CE":"Celkon","CC":"ConCorde","C2":"Changhong","CH":"Cherry Mobile","CK":"Cricket","C1":"Crosscall","CL":"Compal","CN":"CnM","CM":"Crius Mea","C3":"China Mobile","CR":"CreNova","CT":"Capitel","CQ":"Compaq","CO":"Coolpad","C5":"Condor","CW":"Cowon","CU":"Cube","CY":"Coby Kyros","C4":"Cyrus","DA":"Danew","DT":"Datang","DE":"Denver","DX":"DEXP","DS":"Desay","DB":"Dbtel","DC":"DoCoMo","DG":"Dialog","DI":"Dicam","D2":"Digma","DL":"Dell","DN":"DNS","DM":"DMM","DO":"Doogee","DV":"Doov","DP":"Dopod","DR":"Doro","DU":"Dune HD","EB":"E-Boda","EA":"EBEST","EC":"Ericsson","ES":"ECS","EI":"Ezio","EL":"Elephone","EP":"Easypix","EK":"EKO","E1":"Energy Sistem","ER":"Ericy","EE":"Essential","EN":"Eton","ET":"eTouch","EV":"Evertek","EO":"Evolveo","EX":"Explay","EZ":"Ezze","FA":"Fairphone","FL":"Fly","FT":"Freetel","FO":"Foxconn","FU":"Fujitsu","GM":"Garmin-Asus","GA":"Gateway","GD":"Gemini","GI":"Gionee","GG":"Gigabyte","GS":"Gigaset","GC":"GOCLEVER","GL":"Goly","GO":"Google","GR":"Gradiente","GU":"Grundig","HA":"Haier","HS":"Hasee","HE":"HannSpree","HI":"Hisense","HL":"Hi-Level","HM":"Homtom","HO":"Hosin","HP":"HP","HT":"HTC","HU":"Huawei","HX":"Humax","HY":"Hyrican","HN":"Hyundai","IA":"Ikea","IB":"iBall","IJ":"i-Joy","IY":"iBerry","IK":"iKoMo","IM":"i-mate","I1":"iOcean","I2":"IconBIT","IW":"iNew","IF":"Infinix","IN":"Innostream","II":"Inkti","IX":"Intex","IO":"i-mobile","IQ":"INQ","IT":"Intek","IV":"Inverto","IZ":"iTel","JA":"JAY-Tech","JI":"Jiayu","JO":"Jolla","KA":"Karbonn","KD":"KDDI","K1":"Kiano","KI":"Kingsun","KG":"Kogan","KO":"Konka","KM":"Komu","KB":"Koobee","KT":"K-Touch","KH":"KT-Tech","KP":"KOPO","KW":"Konrow","KR":"Koridy","KU":"Kumai","KY":"Kyocera","KZ":"Kazam","L2":"Landvo","LV":"Lava","LA":"Lanix","LC":"LCT","L1":"LeEco","LE":"Lenovo","LN":"Lenco","LP":"Le Pan","LG":"LG","LI":"Lingwin","LO":"Loewe","LM":"Logicom","L3":"Lexand","LX":"Lexibook","LY":"LYF","MJ":"Majestic","MA":"Manta Multimedia","MB":"Mobistel","M3":"Mecer","MD":"Medion","M2":"MEEG","M1":"Meizu","ME":"Metz","MX":"MEU","MI":"MicroMax","M5":"MIXC","M6":"Mobiistar","MC":"Mediacom","MK":"MediaTek","MO":"Mio","MM":"Mpman","M4":"Modecom","MF":"Mofut","MR":"Motorola","MS":"Microsoft","MZ":"MSI","MU":"Memup","MT":"Mitsubishi","ML":"MLLED","MQ":"M.T.T.","MY":"MyPhone","NE":"NEC","NF":"Neffos","NA":"Netgear","NG":"NGM","NO":"Nous","NI":"Nintendo","N1":"Noain","NK":"Nokia","NV":"Nvidia","NB":"Noblex","NM":"Nomi","NN":"Nikon","NW":"Newgen","NX":"Nexian","NT":"NextBook","OB":"Obi","O1":"Odys","OD":"Onda","ON":"OnePlus","OP":"OPPO","OR":"Orange","OT":"O2","OK":"Ouki","OU":"OUYA","OO":"Opsson","OV":"Overmax","OY":"Oysters","PA":"Panasonic","PE":"PEAQ","PG":"Pentagram","PH":"Philips","PI":"Pioneer","PL":"Polaroid","PM":"Palm","PO":"phoneOne","PT":"Pantech","PY":"Ployer","PV":"Point of View","PP":"PolyPad","P2":"Pomp","P3":"PPTV","PS":"Positivo","PR":"Prestigio","P1":"ProScan","PU":"PULID","QI":"Qilive","QT":"Qtek","QM":"QMobile","QU":"Quechua","RA":"Ramos","RC":"RCA Tablets","RB":"Readboy","RI":"Rikomagic","RM":"RIM","RK":"Roku","RO":"Rover","SA":"Samsung","SD":"Sega","SE":"Sony Ericsson","S1":"Sencor","SF":"Softbank","SX":"SFR","SG":"Sagem","SH":"Sharp","SI":"Siemens","SN":"Sendo","S6":"Senseit","SK":"Skyworth","SC":"Smartfren","SO":"Sony","SP":"Spice","SU":"SuperSonic","S5":"Supra","SV":"Selevision","SY":"Sanyo","SM":"Symphony","SR":"Smart","S7":"Smartisan","S4":"Star","S8":"STK","ST":"Storex","S2":"Stonex","S3":"SunVan","SZ":"Sumvision","TA":"Tesla","T5":"TB Touch","TC":"TCL","T7":"Teclast","TE":"Telit","T4":"ThL","TH":"TiPhone","TB":"Tecno Mobile","TD":"Tesco","TI":"TIANYU","TL":"Telefunken","T2":"Telenor","TM":"T-Mobile","TN":"Thomson","T1":"Tolino","TO":"Toplux","TS":"Toshiba","TT":"TechnoTrend","T6":"TrekStor","T3":"Trevi","TU":"Tunisie Telecom","TR":"Turbo-X","TV":"TVC","TX":"TechniSat","TZ":"teXet","UL":"Ulefone","UO":"Unnecto","UN":"Unowhy","US":"Uniscope","UM":"UMIDIGI","UT":"UTStarcom","VA":"Vastking","VD":"Videocon","VE":"Vertu","VI":"Vitelcom","VK":"VK Mobile","VS":"ViewSonic","VT":"Vestel","VR":"Vernee","VL":"Verykool","VV":"Vivo","V2":"Vonino","V1":"Voto","VO":"Voxtel","VF":"Vodafone","VZ":"Vizio","VW":"Videoweb","WA":"Walton","WF":"Wileyfox","WE":"WellcoM","WY":"Wexler","WI":"Wiko","WL":"Wolder","WG":"Wolfgang","WO":"Wonu","WX":"Woxter","XI":"Xiaomi","XO":"Xolo","YA":"Yarvik","YU":"Yuandao","YS":"Yusun","YT":"Ytone","ZE":"Zeemi","ZO":"Zonda","ZP":"Zopo","ZT":"ZTE","ZN":"Zen","WB":"Web TV","XX":"Unknown"};

const deviceTester = (tests: DeviceTest[]) => {
  for (const unitTest of tests) {
    test(`${brands[unitTest.device.brand]} ${unitTest.device.model || ""}`, async () => {
      const result = deviceDetector.parse(unitTest.user_agent).device as GenericDeviceResult;

      unitTest.device.type = unitTest.device.type
        .replace("8", "camera")
        .replace("6", "car")
        .replace("4", "console");

      const formattedResult = {
        type: get(result, "type") || "",
        brand: get(result, "brand") || "",
        model: get(result, "model") || "",
        userAgent: unitTest.user_agent
      };

      const formattedTest = {
        type: unitTest.device.type || "",
        brand: brands[unitTest.device.brand] || "",
        model: unitTest.device.model || "",
        userAgent: unitTest.user_agent
      };

      expect(formattedResult).toEqual(formattedTest);
    });
  }
};

describe("Device / cameras", () => {
  deviceTester(cameraTests);
});

describe("Device / cars", () => {
  deviceTester(carTests);
});

describe("Device / consoles", () => {
  deviceTester(consoleTests);
});
