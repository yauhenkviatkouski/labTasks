/* 1 a */
select * from employee;
/* 1 b */
select code,name from job where minimum_salary <= 500;
/* 1 c */
select avg(salary) from salary where month = 1 and year = 2015;
/* 2 a */
select name, date_of_birth from employee where date_of_birth = (select min(date_of_birth) from employee);
/* 2 b */
select surname from employee where code in 
	( select employee_code from salary where salary > 0 and year = 2015 and month = 1);
/* 2 c */
select employee_code from salary s1 
 where month = 5 and year = 2015 
   and salary < 
   any (select salary from salary s2 
		 where s2.employee_code = s1.employee_code and s2.month < 5 and s2.month >= 1 and s2.year = 2015);
/* 2 d */
select code, name, (select count(employee_code) from career where code = department_code and dismiss_date is null) 
  from department;
/* 3 a */
select employee_code, avg(salary)from salary
 where year = 2015 group by(employee_code);
/* 3 b */
select employee_code, avg(salary)from salary
 where year = 2015 group by(employee_code) having count(salary) >= 2;
/* 4 a */
select surname, name, salary.salary
  from employee inner join salary on employee.code = salary.employee_code 
 where code = salary.employee_code and salary > 1000 and month = 1 and year = 2015;
/* 4 b */
select surname, name, round(datediff(ifnull(dismiss_date, now()), employment_date)/365) as experience_in_years 
  from employee inner join career on code = career.employee_code;
/* 5 a */
update job set minimum_salary = minimum_salary * 1.5;
/* 5 b */
delete from salary where year > 2015;
