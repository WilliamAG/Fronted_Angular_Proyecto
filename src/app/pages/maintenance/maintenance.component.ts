import { Component, OnInit } from '@angular/core';
import { UserType, USR } from 'src/app/shared/interfaces/user.interface';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Album } from 'src/app/shared/interfaces/album.interface';
import { Image } from 'src/app/shared/interfaces/image.interface';
import { EventType } from 'src/app/shared/interfaces/event-type.interface';
import { StoragePlan } from 'src/app/shared/interfaces/storage-plan.interface';
import { TableData } from 'src/app/shared/interfaces/table-data.interface';
import { Log } from 'src/app/shared/interfaces/log.interface';
import { Router } from '@angular/router';

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
  
  constructor(private maintenanceService: MaintenanceService, private router: Router) { }

  ngOnInit(): void {
    this.maintenanceService.getTable('User').subscribe({
      next: (data) => {
        this.users = data as any;
      },
      error: (err) => {
        console.log(err);
        alert('Datos no validos');
      }
    });
  }

  back() {
    this.router.navigate(['/admin/dashboard']);
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
    this.maintenanceService.getTable('User').subscribe({
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
    this.maintenanceService.insertTable('User', user).subscribe({
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
    this.maintenanceService.deleteTable('User', user.userId).subscribe({
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
    this.maintenanceService.updateTable('User', user.userId, user).subscribe({
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
    this.maintenanceService.getTable('Album').subscribe({
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
    this.maintenanceService.insertTable('Album', album).subscribe({
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
    this.maintenanceService.updateTable('Album', album.albumId, album).subscribe({
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
    this.maintenanceService.deleteTable('Album', album.albumId).subscribe({
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
    this.maintenanceService.getTable('Image').subscribe({
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
    this.maintenanceService.insertTable('Image', image).subscribe({
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
    this.maintenanceService.deleteTable('Image', image.imageId).subscribe({
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
    this.maintenanceService.updateTable('Image', image.imageId, image).subscribe({
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
    this.maintenanceService.getTable('UserType').subscribe({
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
    this.maintenanceService.insertTable('UserType', userType).subscribe({
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
    this.maintenanceService.deleteTable('UserType', userType.userTypeId).subscribe({
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
    this.maintenanceService.updateTable('UserType', userType.userTypeId, userType).subscribe({
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
    this.maintenanceService.getTable('StoragePlan').subscribe({
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
    this.maintenanceService.insertTable('StoragePlan', storagePlan).subscribe({
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
    this.maintenanceService.deleteTable('StoragePlan', storagePlan.storagePlanId).subscribe({
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
    this.maintenanceService.updateTable('StoragePlan', storagePlan.storagePlanId, storagePlan).subscribe({
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
    this.maintenanceService.getTable('EventType').subscribe({
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
    this.maintenanceService.insertTable('EventType', eventType).subscribe({
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
    this.maintenanceService.deleteTable('EventType', eventType.eventTypeId).subscribe({
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
    this.maintenanceService.updateTable('EventType', eventType.eventTypeId, eventType).subscribe({
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
    this.maintenanceService.getTable('TableData').subscribe({
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
    this.maintenanceService.insertTable('TableData', tableData).subscribe({
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
    this.maintenanceService.deleteTable('TableData', tableData.tableDataId).subscribe({
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
    this.maintenanceService.updateTable('TableData', tableData.tableDataId, tableData).subscribe({
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
    this.maintenanceService.getTable('Log').subscribe({
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
    this.maintenanceService.insertTable('Log', log).subscribe({
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
    this.maintenanceService.deleteTable('Log', log.logId).subscribe({
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
    this.maintenanceService.updateTable('Log', log.logId, log).subscribe({
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
