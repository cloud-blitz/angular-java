# Installing MariaDB, Setting Password, and Importing Database on Ubuntu Linux

This guide will walk you through the process of installing MariaDB on Ubuntu Linux, setting a password, and importing a database from a SQL file. MariaDB is a popular open-source relational database management system, and it's commonly used in web development environments.

## Setup MariaDB and Import MySQL

Before installing any new software, it's essential to update the package lists to ensure you're getting the latest versions available.

```bash
sudo apt update
sudo apt install mariadb-server
sudo systemctl start mariadb
sudo systemctl enable mariadb
sudo mysql_secure_installation
sudo mysql -u root -p
```
```sql
CREATE DATABASE springbackend;
GRANT ALL PRIVILEGES ON springbackend.* TO 'username'@'localhost' IDENTIFIED BY 'your_password';
```

### Import Database from SQL File
```bash
sudo mysql -u username -p springbackend < springbackend.sql
```
```bash
sudo mysql -u root -p
```
```sql
show databases;
show tables;
select * from tbl_workers;
```