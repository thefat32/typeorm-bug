# Steps to reproduce bug

- Install deps `yarn install`

- Start DB docker

```sh
docker-compose up
```

- Sync schema using `yarn schema:sync`

- Run `yarn schema:sync` any number of times you want and will always get the table's buggy columns modified again and again:

```sql
ALTER TABLE `buggy` CHANGE `buggyColumn` `buggyColumn` varchar(255) NULL;
ALTER TABLE `buggy` CHANGE `buggyColumn2` `buggyColumn2` varchar(255) NULL;
```

