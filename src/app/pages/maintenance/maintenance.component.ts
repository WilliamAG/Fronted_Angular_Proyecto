import { Component, OnInit } from '@angular/core';
import { UserType, USR } from 'src/app/shared/interfaces/user.interface';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Album } from 'src/app/shared/interfaces/album.interface';
import { Image } from 'src/app/shared/interfaces/image.interface';
import { EventType } from 'src/app/shared/interfaces/event-type.interface';
import { StoragePlan } from 'src/app/shared/interfaces/storage-plan.interface';
import { TableData } from 'src/app/shared/interfaces/table-data.interface';
import { Log } from 'src/app/shared/interfaces/log.interface';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})

export class MaintenanceComponent implements OnInit {
  
  userTable: boolean = true;
  albumTable: boolean = false;
  imageTable: boolean = false;
  userTypeTable: boolean = false;
  storagePlanTable: boolean = false;
  tableDataTable: boolean = false;
  eventTypeTable: boolean = false;
  logTable: boolean = false;

  users: USR[] = [];
  albums: Album[] = [];
  images: Image[] = [];
  userTypes: UserType[] = [];
  eventTypes: EventType[] = [];
  storagePlans: StoragePlan[] = [];
  tableData: TableData[] = [];
  logs: Log[] = [];
  
  constructor(private maintenanceService: MaintenanceService) { }

  ngOnInit(): void {
    this.maintenanceService.getTable('user').subscribe({
      next: (data) => {
        this.users = data as any;
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');
      }
    });
  }

  goUserTable() {
    this.userTable = true;
    this.albumTable = false;
    this.imageTable = false;
    this.userTypeTable = false;
    this.storagePlanTable = false;
    this.tableDataTable = false;
    this.eventTypeTable = false;
    this.logTable = false;
    this.maintenanceService.getTable('user').subscribe({
      next: (data) => {
        this.users = data as any;
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  addUser(user: USR) {
    this.maintenanceService.insertTable('user', user).subscribe({
      next: () => {
        console.log("add user");
        console.log(user);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  deleteUser(user: USR) {
    if (user.userId === undefined) {
      return;
    }
    this.maintenanceService.deleteTable('user', user.userId).subscribe({
      next: () => {
        console.log('remove user');
        console.log(user);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    }); 
  }

  updateUser(user: USR) {
    if (user.userId === undefined) {
      console.log('user id is undefined');
      return;
    }
    this.maintenanceService.updateTable('user', user.userId, user).subscribe({
      next: () => {
        console.log('update user');
        console.log(user);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  goAlbumTable() {
    this.userTable = false;
    this.albumTable = true;
    this.imageTable = false;
    this.userTypeTable = false;
    this.storagePlanTable = false;
    this.tableDataTable = false;
    this.eventTypeTable = false;
    this.logTable = false;
    this.maintenanceService.getTable('album').subscribe({
      next: (data) => {
        this.albums = data as any;
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');
      }
    });
  }

  addAlbum(album: Album) {
    this.maintenanceService.insertTable('album', album).subscribe({
      next: () => {
        console.log("add album");
        console.log(album);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  updateAlbum(album: Album) {
    if (album.albumId === undefined) {
      console.log('album id is undefined');
      return;
    }
    this.maintenanceService.updateTable('album', album.albumId, album).subscribe({
      next: () => {
        console.log('update album');
        console.log(album);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  deleteAlbum(album: Album) {
    if (album.albumId === undefined) {
      return;
    }
    this.maintenanceService.deleteTable('album', album.albumId).subscribe({
      next: () => {
        console.log('remove album');
        console.log(album);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  goImageTable() {
    this.userTable = false;
    this.albumTable = false;
    this.imageTable = true;
    this.userTypeTable = false;
    this.storagePlanTable = false;
    this.tableDataTable = false;
    this.eventTypeTable = false;
    this.logTable = false;
    this.maintenanceService.getTable('image').subscribe({
      next: (data) => {
        this.images = data as any;
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  addimage(image: Image) {
    this.maintenanceService.insertTable('image', image).subscribe({
      next: () => {
        console.log("add image");
        console.log(image);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  deleteImage(image: Image) {
    if (image.imageId === undefined) {
      console.log('image id is undefined');
      return;
    }
    this.maintenanceService.deleteTable('image', image.imageId).subscribe({
      next: () => {
        console.log('remove image');
        console.log(image);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  updateImage(image: Image) {
    if (image.imageId === undefined) {
      console.log('image id is undefined ' + image.imageId);
      return;
    }
    this.maintenanceService.updateTable('image', image.imageId, image).subscribe({
      next: () => {
        console.log('update image');
        console.log(image);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  goUserTypeTable() {
    this.userTable = false;
    this.albumTable = false;
    this.imageTable = false;
    this.userTypeTable = true;
    this.storagePlanTable = false;
    this.tableDataTable = false;
    this.eventTypeTable = false;
    this.logTable = false;
    this.maintenanceService.getTable('usertype').subscribe({
      next: (data) => {
        this.userTypes = data as any;
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  addUserType(userType: UserType) {
    this.maintenanceService.insertTable('usertype', userType).subscribe({
      next: () => {
        console.log("add user type");
        console.log(userType);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  deleteUserType(userType: UserType) {
    if (userType.userTypeId === undefined) {
      console.log('user type id is undefined');
      return;
    }
    this.maintenanceService.deleteTable('usertype', userType.userTypeId).subscribe({
      next: () => {
        console.log('remove user type');
        console.log(userType);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  updateUserType(userType: UserType) {
    if (userType.userTypeId === undefined) {
      console.log('user type id is undefined');
      return;
    }
    this.maintenanceService.updateTable('usertype', userType.userTypeId, userType).subscribe({
      next: () => {
        console.log('update user type');
        console.log(userType);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  goStoragePlanTable() {
    this.userTable = false;
    this.albumTable = false;
    this.imageTable = false;
    this.userTypeTable = false;
    this.storagePlanTable = true;
    this.tableDataTable = false;
    this.eventTypeTable = false;
    this.logTable = false;
    this.maintenanceService.getTable('storageplan').subscribe({
      next: (data) => {
        this.storagePlans = data as any;
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  addStoragePlan(storagePlan: StoragePlan) {
    this.maintenanceService.insertTable('storageplan', storagePlan).subscribe({
      next: () => {
        console.log("add storage plan");
        console.log(storagePlan);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  deleteStoragePlan(storagePlan: StoragePlan) {
    if (storagePlan.storagePlanId === undefined) {
      console.log('storage plan id is undefined');
      return;
    }
    this.maintenanceService.deleteTable('storageplan', storagePlan.storagePlanId).subscribe({
      next: () => {
        console.log('remove storage plan');
        console.log(storagePlan);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  updateStoragePlan(storagePlan: StoragePlan) {
    if (storagePlan.storagePlanId === undefined) {
      console.log('storage plan id is undefined');
      return;
    }
    this.maintenanceService.updateTable('storageplan', storagePlan.storagePlanId, storagePlan).subscribe({
      next: () => {
        console.log('update storage plan');
        console.log(storagePlan);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  goEventTypeTable() {
    this.userTable = false;
    this.albumTable = false;
    this.imageTable = false;
    this.userTypeTable = false;
    this.storagePlanTable = false;
    this.tableDataTable = false;
    this.eventTypeTable = true;
    this.logTable = false;
    this.maintenanceService.getTable('eventtype').subscribe({
      next: (data) => {
        this.eventTypes = data as any;
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  addEventType(eventType: EventType) {
    this.maintenanceService.insertTable('eventtype', eventType).subscribe({
      next: () => {
        console.log("add event type");
        console.log(eventType);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  deleteEventType(eventType: EventType) {
    if (eventType.eventTypeId === undefined) {
      console.log('event type id is undefined');
      return;
    }
    this.maintenanceService.deleteTable('eventtype', eventType.eventTypeId).subscribe({
      next: () => {
        console.log('remove event type');
        console.log(eventType);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  updateEventType(eventType: EventType) {
    if (eventType.eventTypeId === undefined) {
      console.log('event type id is undefined');
      return;
    }
    this.maintenanceService.updateTable('eventtype', eventType.eventTypeId, eventType).subscribe({
      next: () => {
        console.log('update event type');
        console.log(eventType);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  goTableDataTable() {
    this.userTable = false;
    this.albumTable = false;
    this.imageTable = false;
    this.userTypeTable = false;
    this.storagePlanTable = false;
    this.tableDataTable = true;
    this.eventTypeTable = false;
    this.logTable = false;
    this.maintenanceService.getTable('tabledata').subscribe({
      next: (data) => {
        this.tableData = data as any;
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  addTableData(tableData: TableData) {
    this.maintenanceService.insertTable('tabledata', tableData).subscribe({
      next: () => {
        console.log("add table data");
        console.log(tableData);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  deleteTableData(tableData: TableData) {
    if (tableData.tableDataId === undefined) {
      console.log('table data id is undefined');
      return;
    }
    this.maintenanceService.deleteTable('tabledata', tableData.tableDataId).subscribe({
      next: () => {
        console.log('remove table data');
        console.log(tableData);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  updateTableData(tableData: TableData) {
    if (tableData.tableDataId === undefined) {
      console.log('table data id is undefined');
      return;
    }
    this.maintenanceService.updateTable('tabledata', tableData.tableDataId, tableData).subscribe({
      next: () => {
        console.log('update table data');
        console.log(tableData);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  goLogTable() {
    this.userTable = false;
    this.albumTable = false;
    this.imageTable = false;
    this.userTypeTable = false;
    this.storagePlanTable = false;
    this.tableDataTable = false;
    this.eventTypeTable = false;
    this.logTable = true;
    this.maintenanceService.getTable('log').subscribe({
      next: (data) => {
        this.logs = data as any;
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  addLog(log: Log) {
    this.maintenanceService.insertTable('log', log).subscribe({
      next: () => {
        console.log("add log");
        console.log(log);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  deleteLog(log: Log) {
    if (log.logId === undefined) {
      console.log('log id is undefined');
      return;
    }
    this.maintenanceService.deleteTable('log', log.logId).subscribe({
      next: () => {
        console.log('remove log');
        console.log(log);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

  updateLog(log: Log) {
    if (log.logId === undefined) {
      console.log('log id is undefined');
      return;
    }
    this.maintenanceService.updateTable('log', log.logId, log).subscribe({
      next: () => {
        console.log('update log');
        console.log(log);
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');

      }
    });
  }

}
