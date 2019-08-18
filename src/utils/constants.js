import { AppConfig } from 'blockstack'

// allow user to have write provilidges, and allow that data being written to be viewable by others
export const appConfig = new AppConfig(['store_write', 'publish_data'])