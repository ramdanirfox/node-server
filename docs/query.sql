create table users (
  id smallint primary key,
  displayname varchar(200),
  username varchar(200),
  email varchar(200),
  password varchar(200),
  description text,
  info text
  );
  
 create sequence user_sequence;
 
alter table users alter column id set default nextval('user_sequence') ;

insert into users ( username )  values ('dani');
                  
delete from users where username = 'dodi';

begin;

update users set
description = '{"privelge":"manager"}'
where id = 2;

commit;

-- Ini untuk batal, atau close connection
rollback; 

select * from users;

ALTER TABLE users
ADD COLUMN division varchar(200);