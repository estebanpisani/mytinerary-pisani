# MyTinerary

![](https://i.imgur.com/g2DAcrM.jpg)

Travel app developed in order to put into practice the knowledge acquired about the **MERN** Stack (MongoDB, Express, React & Node).

This app is one of the individual projects for [MindHub](https://mindhubweb.com/)'s **MERN Fullstack
& Mobile Apps**.

Check the [live demo](https://mytinerary-pisani.herokuapp.com/)

The app has its [mobile version](https://github.com/estebanpisani/myTinerary-Mobile) built with React Native

## Features

- [x] JWT Authentication & Authorization
- [x] API Rest
- [x] CRUD with validations
- [x] State management
- [x] Mail sender
- [x] Likes & Comments
  
## Future Features

- [ ] Admin role and functions
- [ ] Itinerary subscription

## Getting Started
You must include two `.env` files:
- `backend/.env` with: `PORT, USER, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, SECRET_KEY, MONGO_URI`
- `frontend/.env` with: `SERVER_URL` (the backend API URL)

#### Install dependencies
```bash
# Backend
cd backend && npm install

# Frontend
cd frontend && npm install
```

#### Run the application
```bash
# Backend (from backend/)
npm run dev

# Frontend (from frontend/)
npm run dev
```

## Frameworks and libraries
### Front End
- React
- Redux (State management)
- Material-UI
- Swiper (Activities Carousel)
- Slick-carousel (Home carousel)

### Back End
- Node.js
- Express
- MongoDB (Database)
- Mongoose (Data model)
- Bcrypt (password hashing)
- JSON Web Token
- Passport (Authentication)
- JOI (Validations)
- Nodemailer (Mail sender)

## Credits

### Author
Esteban Pisani

### Supported by
- [Adrián Deambroggi](https://github.com/DEAMBROGGI)
- [Ignacio Borraz](https://github.com/ignacioborraz)
- [Eric Rodriguez](https://github.com/ericfrodriguez)
- [José Lopez Zaccaro](https://github.com/JoseZaccaro)
