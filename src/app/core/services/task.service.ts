import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  listado : Task[];
  lastId: number = 0;

  constructor() { 
    this.init();
  }

  getAllTask() {
    return this.listado;
  }

  selectById(param: number) {
    return this.listado.filter((x)=> {
      return x.id == param
    })[0].url
  }

  addTask(param : Task) {
    this.lastId = this.listado.length + 1;
    param.id = this.lastId;
    this.listado.unshift(param);
  }

  updateTask(param : Task) {
    let local = this.listado.filter((x)=> x.id == param.id);
    local[0].date = param.date;
    local[0].description = param.description;
    local[0].name = param.name;
    local[0].url = param.url;
    
  }

  deleteTask(id : number) {
    this.listado = this.listado.filter(x => x.id != id );
  }
  init() {
    this.listado = [
        {
          id: 1,
          name: "VestibulumAc.ppt",
          description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
          url: "https://picsum.photos/id/237/200/300",
          date: 9201
        },
        {
          id: 2,
          name: "EtUltricesPosuere.jpeg",
          description: "Fusce consequat. Nulla nisl. Nunc nisl.",
          url: "https://picsum.photos/id/238/200/300",
          date: 6480
        },
        {
          id: 3,
          name: "VariusIntegerAc.avi",
          description: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          url: "https://picsum.photos/id/239/200/300",
          date: 5142
        },
        {
          id: 4,
          name: "Nunc.tiff",
          description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
          url: "https://picsum.photos/id/240/200/300",
          date: 7541
        },
        {
          id: 5,
          name: "PharetraMagna.mov",
          description: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          url: "https://picsum.photos/id/241/200/300",
          date: 5451
        },
        {
          id: 6,
          name: "EratVestibulumSed.ppt",
          description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          url: "https://picsum.photos/id/242/200/300",
          date: 3491
        },
        {
          id: 7,
          name: "AuctorSed.txt",
          description: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          url: "https://picsum.photos/id/243/200/300",
          date: 7537
        },
        {
          id: 8,
          name: "VelAccumsanTellus.jpeg",
          description: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          url: "https://picsum.photos/id/244/200/300",
          date: 7671
        },
        {
          id: 9,
          name: "VolutpatDui.xls",
          description: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
          url: "https://picsum.photos/id/260/200/300",
          date: 2098
        },
        {
          id: 10,
          name: "Odio.xls",
          description: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
          url: "https://picsum.photos/id/261/200/300",
          date: 9786
        },
        {
          id: 11,
          name: "Odio.tiff",
          description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          url: "https://picsum.photos/id/247/200/300",
          date: 926
        },
        {
          id: 12,
          name: "EgetTempus.mpeg",
          description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          url: "https://picsum.photos/id/248/200/300",
          date: 5091
        },
        {
          id: 13,
          name: "Blandit.tiff",
          description: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
          url: "https://picsum.photos/id/249/200/300",
          date: 1692
        },
        {
          id: 14,
          name: "CursusVestibulum.avi",
          description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          url: "https://picsum.photos/id/250/200/300",
          date: 5998
        },
        {
          id: 15,
          name: "QuisLiberoNullam.avi",
          description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          url: "https://picsum.photos/id/251/200/300",
          date: 9208
        },
        {
          id: 16,
          name: "Sapien.ppt",
          description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
          url: "https://picsum.photos/id/252/200/300",
          date: 9491
        },
        {
          id: 17,
          name: "LeoMaecenas.jpeg",
          description: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
          url: "https://picsum.photos/id/253/200/300",
          date: 460
        },
        {
          id: 18,
          name: "PraesentBlanditNam.gif",
          description: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
          url: "https://picsum.photos/id/254/200/300",
          date: 5168
        },
        {
          id: 19,
          name: "MorbiOdio.mp3",
          description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          url: "https://picsum.photos/id/255/200/300",
          date: 3589
        },
        {
          id: 20,
          name: "Diam.mp3",
          description: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
          url: "https://picsum.photos/id/256/200/300",
          date: 3815
        },
        {
          id: 21,
          name: "EstPhasellus.ppt",
          description: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          url: "https://picsum.photos/id/257/200/300",
          date: 4379
        },
        {
          id: 22,
          name: "LeoRhoncusSed.xls",
          description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          url: "https://picsum.photos/id/258/200/300",
          date: 372
        },
        {
          id: 23,
          name: "ImperdietEtCommodo.jpeg",
          description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          url: "https://picsum.photos/id/259/200/300",
          date: 500
        },
        
      ]
  }
}
