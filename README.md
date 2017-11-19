# dockyards-frontend
SJS Weekend Test

*Window environment may have to install some packages globally*
### Install
```npm install -g```

### Build
```npm run build```

### Run Json-Server
```npm run start:api```

### Run Front-end
```npm run start:dev```
Then go to http://localhost:8080/boats

### Available routes
1. ```/boats``` -> List all boats
2. ```/boats/:boatId``` -> View details/Update/Delete
3. ```/boats/create```-> Create new boat record
4. ```/assignment``` -> Select workers and assigned boats, cannot assign or unassign at the moment
