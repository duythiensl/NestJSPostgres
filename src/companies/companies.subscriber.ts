import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { Company } from './company.entity';
  
  @EventSubscriber()
  export class CompanySubscriber implements EntitySubscriberInterface<Company> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return Company;
    }
  
    beforeInsert(event: InsertEvent<Company>) {
      console.log(`BEFORE COMPANY INSERTED: `, event.entity);
    }
  }