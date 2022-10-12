import { Injectable } from '@angular/core';
import { Person } from '../models/person';




@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor() { }

  getAllPeople() {
    let listado : Person[] = [
      {
        id: 1,
        name: "Auguste",
        nickname: "aschroter0",
        age: 57,
        description: "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas",
        url: "https://picsum.photos/id/237/200/300"
      },
      {
        id: 2,
        name: "Noble",
        nickname: "nredrup1",
        age: 47,
        description: "nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
        url: "https://picsum.photos/id/238/200/300"
      },
      {
        id: 3,
        name: "Harrie",
        nickname: "hsparrow2",
        age: 7,
        description: "velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros",
        url: "https://picsum.photos/id/239/200/300"
      },
      {
        id: 4,
        name: "Renado",
        nickname: "rcoggles3",
        age: 98,
        description: "curae nulla dapibus dolor vel est donec odio justo sollicitudin",
        url: "https://picsum.photos/id/240/200/300"
      },
      {
        id: 5,
        name: "Tami",
        nickname: "tbril4",
        age: 84,
        description: "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
        url: "https://picsum.photos/id/241/200/300"
      },
      {
        id: 6,
        name: "Dewitt",
        nickname: "dgartin5",
        age: 59,
        description: "aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
        url: "https://picsum.photos/id/242/200/300"
      },
      {
        id: 7,
        name: "Sandy",
        nickname: "scollip6",
        age: 90,
        description: "in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis",
        url: "https://picsum.photos/id/243/200/300"
      },
      {
        id: 8,
        name: "Stanleigh",
        nickname: "scleeves7",
        age: 55,
        description: "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
        url: "https://picsum.photos/id/244/200/300"
      },
      {
        id: 9,
        name: "Terry",
        nickname: "tkeneford8",
        age: 72,
        description: "sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
        url: "https://picsum.photos/id/295/200/300"
      },
      {
        id: 10,
        name: "Dianne",
        nickname: "dgrout9",
        age: 62,
        description: "integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien",
        url: "https://picsum.photos/id/296/200/300"
      },
      {
        id: 11,
        name: "Darcey",
        nickname: "dgladmana",
        age: 41,
        description: "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in",
        url: "https://picsum.photos/id/247/200/300"
      },
      {
        id: 12,
        name: "Darrelle",
        nickname: "dwankb",
        age: 44,
        description: "nulla suspendisse potenti cras in purus eu magna vulputate luctus",
        url: "https://picsum.photos/id/248/200/300"
      },
      {
        id: 13,
        name: "Fin",
        nickname: "fdelorenzoc",
        age: 2,
        description: "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci",
        url: "https://picsum.photos/id/249/200/300"
      },
      {
        id: 14,
        name: "Una",
        nickname: "uedworthyd",
        age: 27,
        description: "felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam",
        url: "https://picsum.photos/id/250/200/300"
      },
      {
        id: 15,
        name: "Jamison",
        nickname: "jdefranciscie",
        age: 44,
        description: "eu massa donec dapibus duis at velit eu est congue",
        url: "https://picsum.photos/id/251/200/300"
      },
      {
        id: 16,
        name: "Jelene",
        nickname: "jrowbothamf",
        age: 69,
        description: "ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia",
        url: "https://picsum.photos/id/252/200/300"
      },
      {
        id: 17,
        name: "Grenville",
        nickname: "gdunsireg",
        age: 60,
        description: "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
        url: "https://picsum.photos/id/253/200/300"
      },
      {
        id: 18,
        name: "Janeczka",
        nickname: "jsidworthh",
        age: 2,
        description: "mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
        url: "https://picsum.photos/id/254/200/300"
      },
      {
        id: 19,
        name: "Kamilah",
        nickname: "kfrangelloi",
        age: 43,
        description: "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
        url: "https://picsum.photos/id/255/200/300"
      },
      {
        id: 20,
        name: "Enriqueta",
        nickname: "edieganj",
        age: 87,
        description: "orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a",
        url: "https://picsum.photos/id/256/200/300"
      },
      {
        id: 21,
        name: "Fayre",
        nickname: "fhodgink",
        age: 61,
        description: "et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi",
        url: "https://picsum.photos/id/257/200/300"
      },
      {
        id: 22,
        name: "Janifer",
        nickname: "jollingtonl",
        age: 57,
        description: "at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat",
        url: "https://picsum.photos/id/258/200/300"
      },
      {
        id: 23,
        name: "Rudy",
        nickname: "rmarleym",
        age: 100,
        description: "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus",
        url: "https://picsum.photos/id/259/200/300"
      },
      {
        id: 24,
        name: "Hartley",
        nickname: "hgreenhalln",
        age: 60,
        description: "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus",
        url: "https://picsum.photos/id/260/200/300"
      },
      {
        id: 25,
        name: "Graeme",
        nickname: "gbrayfordo",
        age: 86,
        description: "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum",
        url: "https://picsum.photos/id/261/200/300"
      },
      {
        id: 26,
        name: "Trent",
        nickname: "tbristowp",
        age: 28,
        description: "nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit",
        url: "https://picsum.photos/id/297/200/300"
      },
      {
        id: 27,
        name: "Arlen",
        nickname: "aollierq",
        age: 58,
        description: "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales",
        url: "https://picsum.photos/id/263/200/300"
      },
      {
        id: 28,
        name: "Lynn",
        nickname: "lmurisr",
        age: 44,
        description: "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
        url: "https://picsum.photos/id/264/200/300"
      },
      {
        id: 29,
        name: "Doreen",
        nickname: "domohuns",
        age: 100,
        description: "nulla eget eros elementum pellentesque quisque porta volutpat erat quisque",
        url: "https://picsum.photos/id/265/200/300"
      },
      {
        id: 30,
        name: "Anetta",
        nickname: "aeyreet",
        age: 74,
        description: "augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida",
        url: "https://picsum.photos/id/266/200/300"
      },
      {
        id: 31,
        name: "Turner",
        nickname: "tasplenu",
        age: 1,
        description: "non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus",
        url: "https://picsum.photos/id/267/200/300"
      },
      {
        id: 32,
        name: "Dennie",
        nickname: "doldmanv",
        age: 10,
        description: "ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis",
        url: "https://picsum.photos/id/268/200/300"
      },
      {
        id: 33,
        name: "Elwyn",
        nickname: "edavillew",
        age: 5,
        description: "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et",
        url: "https://picsum.photos/id/269/200/300"
      },
      {
        id: 34,
        name: "Robby",
        nickname: "remtagex",
        age: 11,
        description: "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus",
        url: "https://picsum.photos/id/270/200/300"
      },
      {
        id: 35,
        name: "Joellen",
        nickname: "jstonuaryy",
        age: 67,
        description: "non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar",
        url: "https://picsum.photos/id/271/200/300"
      },
      {
        id: 36,
        name: "Tracy",
        nickname: "tbaverstockz",
        age: 74,
        description: "sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula",
        url: "https://picsum.photos/id/272/200/300"
      },
      {
        id: 37,
        name: "Gloriana",
        nickname: "gpetherick10",
        age: 68,
        description: "tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
        url: "https://picsum.photos/id/273/200/300"
      },
      {
        id: 38,
        name: "Sidoney",
        nickname: "swhiteway11",
        age: 69,
        description: "luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
        url: "https://picsum.photos/id/274/200/300"
      },
      {
        id: 39,
        name: "Dodi",
        nickname: "dpidgeley12",
        age: 6,
        description: "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi",
        url: "https://picsum.photos/id/275/200/300"
      },
      {
        id: 40,
        name: "Abramo",
        nickname: "agallamore13",
        age: 54,
        description: "ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at",
        url: "https://picsum.photos/id/276/200/300"
      },
      {
        id: 41,
        name: "Hillyer",
        nickname: "hmandre14",
        age: 44,
        description: "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere",
        url: "https://picsum.photos/id/277/200/300"
      },
      {
        id: 42,
        name: "Cristie",
        nickname: "ckiss15",
        age: 59,
        description: "luctus et ultrices posuere cubilia curae duis faucibus accumsan odio",
        url: "https://picsum.photos/id/278/200/300"
      },
      {
        id: 43,
        name: "Hyacinth",
        nickname: "hfolbige16",
        age: 83,
        description: "sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
        url: "https://picsum.photos/id/279/200/300"
      },
      {
        id: 44,
        name: "Annette",
        nickname: "afavelle17",
        age: 81,
        description: "erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
        url: "https://picsum.photos/id/280/200/300"
      },
      {
        id: 45,
        name: "Dix",
        nickname: "dmitcheson18",
        age: 22,
        description: "diam erat fermentum justo nec condimentum neque sapien placerat ante",
        url: "https://picsum.photos/id/281/200/300"
      },
      {
        id: 46,
        name: "Matthew",
        nickname: "molenechan19",
        age: 31,
        description: "diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam",
        url: "https://picsum.photos/id/282/200/300"
      },
      {
        id: 47,
        name: "Charlena",
        nickname: "cpomfret1a",
        age: 18,
        description: "ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac",
        url: "https://picsum.photos/id/283/200/300"
      },
      {
        id: 48,
        name: "Renie",
        nickname: "rmealing1b",
        age: 20,
        description: "ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo",
        url: "https://picsum.photos/id/284/200/300"
      },
      {
        id: 49,
        name: "Ortensia",
        nickname: "odumbrell1c",
        age: 76,
        description: "arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu",
        url: "https://picsum.photos/id/289/200/300"
      },
      {
        id: 50,
        name: "Melisandra",
        nickname: "mfinby1d",
        age: 27,
        description: "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut",
        url: "https://picsum.photos/id/288/200/300"
      }
    ]
      
    return listado;
  }
}