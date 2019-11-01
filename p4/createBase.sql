drop database company;
create database company; 
use company;
create table Department (
code int,
name varchar(255),
address varchar(255),
primary key(code)
);
create table Employee (
code int,
surname varchar(255),
name varchar(255),
date_of_birth date,
primary key(code)
);
create table Job (
code int,
name varchar(255),
minimum_salary int,
primary key(code)
);
create table Career (
department_code int,
employee_code int,
job_code int,
employment_date date,
dismiss_date date,
primary key(employee_code, job_code)
);
create table Salary (
employee_code int,
month int,
year int,
salary int,
primary key(employee_code, month, year)
);
