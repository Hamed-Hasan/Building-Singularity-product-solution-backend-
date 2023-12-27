# BeatBox: Musical Singularity Web App 🎶

## Overview

Welcome to BeatBox, your soulful sanctuary for musical enchantment. Crafted with love and powered by the MERN stack, BeatBox seamlessly weaves a symphony of Create, Read, Update, and Delete functionalities, inviting users to explore, play, and curate their personal musical journey with heart-touching ease. 🎶💖

**Live Link to BeatBox: [Explore BeatBox](https://singularity-music.vercel.app)**

![BeatBox Preview](https://i.ibb.co/9NXNWRF/beatbox.png)


## Frontend Features 🚀🎵

- **Immersive UI/UX:** Immerse yourself in a visually stunning and responsive user interface crafted with React.js, providing a delightful user experience.
- **Dynamic Search:** Use the powerful search bar to dynamically explore a vast collection of music tracks, ensuring you find the perfect tune for every moment.
- **Play with Style:** Experience the power of seamless and stylish music playback as you effortlessly play selected tracks, turning your device into a personalized jukebox.

### Advanced Music Management 🎶

- **Update and Enhance:** Modify music track details with ease! Enjoy the flexibility to update titles, artists, and URLs for an ever-evolving musical library.
- **Delete with Confidence:** Take control of your music collection by effortlessly deleting tracks you no longer resonate with, ensuring your playlist reflects your current vibe.

### User Authentication 🌐

- **Secure Login:** Guard your musical haven with a secure login system, allowing users to create accounts and safeguard their personalized music preferences.
- **Effortless Signup:** Seamlessly join the BeatBox community with a hassle-free signup process, making it quick and easy to become part of the musical journey.

## Backend Wonders 🌟🔮

- **Expressive API Crafting:** Marvel at the mastery of Node.js and Express.js as they join forces to create an expressive API, handling search queries, updates, and deletions effortlessly.
- **Robust MongoDB Storage:** Experience the reliability of MongoDB as it stores a curated list of music tracks, ensuring seamless data retrieval and storage.
- **Intelligent Filtering:** Witness the backend's intelligence in action as it filters music tracks dynamically, delivering personalized and relevant results to users.

### Bonus Features 🎉✨

- **Playlist Creation:** Elevate your musical experience by creating and managing personalized playlists, curating the perfect soundtracks for different moods and occasions.
- **Social Integration:** Share your favorite tracks and playlists with friends through integrated social features, fostering a sense of community and musical discovery.


## Additional Considerations 🌈

- **Simplicity First:** BeatBox prioritizes simplicity and user-friendliness in its interface.
- **Validation Magic:** Basic input validation ensures a smooth and error-free search experience.
- **Placeholder Harmony:** For the purpose of this task, placeholder music files or URLs to external resources are used.


## Frontend Technologies 🚀🎵

- **React.js:** Building immersive and responsive user interfaces.
- **Redux:** Managing state efficiently for a seamless playback experience.
- **Chakra UI:** Crafting stylish and visually appealing designs.
- **Axios:** Making asynchronous HTTP requests for dynamic data retrieval.
- **Framer Motion:** Adding smooth and attractive animations.
- **React Router:** Navigating between different components seamlessly.

## Backend Technologies 🌟🔮

- **Node.js:** Powering the backend server for handling requests.
- **Express.js:** Creating an expressive and efficient API.
- **MongoDB:** Storing a curated list of music tracks securely.
- **Mongoose:** Interacting with MongoDB for data manipulation.
- **Bcrypt:** Ensuring secure password hashing for user authentication.
- **CORS:** Enabling cross-origin resource sharing for enhanced accessibility.
- **Dotenv:** Managing environment variables securely.
- **JSONWebToken:** Providing secure user authentication.

## DevOps and Tooling 🎉✨

- **Nodemon:** Auto-reloading the server during development.
- **Vite:** Fast and efficient frontend tooling.
- **ESLint:** Ensuring code consistency and quality.
- **Git:** Version control for collaborative development.


# Entity-Relationship Diagram (ERD)

```

+---------------------+       +---------------------+
|        User         |       |        Song         |
+---------------------+       +---------------------+
| _id: ObjectId       |       | _id: ObjectId       |
| username: String    |       | title: String       |
| password: String    |       | duration: String    |
| favorites: Array    |       | coverImage: String  |
| playlists: Array    |       | artistes: Array     |
+---------------------+       | artistIds: [ObjectId]|
   |                       |   | likes: Map[Boolean]  |
   |                       |   | songUrl: String      |
   |                       |   | type: String         |
   |                       |   +---------------------+
   |                       |          |
   |                       |          |
   |                       |          |
   v                       |          v
+---------------------+       +---------------------+
|      Playlist       |       |       Artiste       |
+---------------------+       +---------------------+
| _id: ObjectId       |       | _id: ObjectId       |
| title: String       |       | name: String        |
| description: String |       | image: String       |
| userId: String      |       | type: String        |
| userName: String    |       | bio: String         |
| songs: Array        |       +---------------------+
| isPrivate: Boolean  |
| type: String        |
+---------------------+


```

# BeatBox API Endpoints 🎵

## Artist Routes 🎨

- **GET /api/artistes/all:** Get all artistes. 🎤
- **GET /api/artistes/top:** Get top artistes. 🌟
- **GET /api/artistes/:id:** Get details of a specific artiste. 📄

## Playlist Routes 🎶

- **GET /api/playlists/:id:** Get details of a specific playlist. 📄
- **GET /api/playlists:** Get all playlists. 📋
- **POST /api/playlists/create:** Create a new playlist. ✨
- **PATCH /api/playlists/:id:** Edit a playlist. 🔄

## Song Routes 🎧

- **GET /api/songs:** Get all songs. 📋
- **GET /api/songs/top:** Get top songs. 🌟
- **GET /api/songs/releases:** Get new releases. 🆕
- **GET /api/songs/random:** Get random songs. 🎲
- **GET /api/songs/popular:** Get songs around you. 🌍
- **PATCH /api/songs/like/:id:** Like a song. ❤️

## User Routes 👤

- **POST /api/users/login:** Log in a user. 🔐
- **POST /api/users/register:** Register a new user. 📝
- **GET /api/users/favorites:** Get user's favorite songs. 🎵

## Route Usage 🚀

- All artist routes are under `/api/artistes/`.
- All playlist routes are under `/api/playlists/`.
- All song routes are under `/api/songs/`.
- All user routes are under `/api/users/`.


# API ENDPOINTS & DATA


### Artist Routes 🎨

#### Get All Artists
- **Endpoint:** `/api/artistes/all`
- **Example Response:**
  ```json
  [
    {
      "_id": "artist_id",
      "name": "Artist Name",
      "image": "artist_image_url",
      "type": "Artiste",
      "bio": "Artist Bio"
    },
    // Additional artists...
  ]
  ```

#### Get Top Artists
- **Endpoint:** `/api/artistes/top`
- **Example Response:**
  ```json
  [
    {
      "_id": "artist_id",
      "name": "Top Artist Name",
      "image": "top_artist_image_url",
      "type": "Artiste",
      "bio": "Top Artist Bio"
    },
    // Additional top artists...
  ]
  ```

#### Get Artist by ID
- **Endpoint:** `/api/artistes/:id`
- **Example Response:**
  ```json
  {
    "_id": "artist_id",
    "name": "Artist Name",
    "image": "artist_image_url",
    "type": "Artiste",
    "bio": "Artist Bio"
  }
  ```

### Playlist Routes 🎶

#### Get All Playlists
- **Endpoint:** `/api/playlists`
- **Example Response:**
  ```json
  [
    {
      "_id": "playlist_id",
      "title": "Playlist Title",
      "description": "Playlist Description",
      "userId": "user_id",
      "userName": "Username",
      "songs": [
        "song_id_1",
        "song_id_2",
        // Additional song ids...
      ],
      "isPrivate": false,
      "type": "Playlist",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    },
    // Additional playlists...
  ]
  ```

#### Get Playlist by ID
- **Endpoint:** `/api/playlists/:id`
- **Example Response:**
  ```json
  {
    "_id": "playlist_id",
    "title": "Playlist Title",
    "description": "Playlist Description",
    "userId": "user_id",
    "userName": "Username",
    "songs": [
      "song_id_1",
      "song_id_2",
      // Additional song ids...
    ],
    "isPrivate": false,
    "type": "Playlist",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

#### Create Playlist
- **Endpoint:** `/api/playlists/create`
- **Example Request:**
  ```json
  {
    "title": "New Playlist Title",
    "description": "New Playlist Description",
    "userId": "user_id",
    "userName": "Username",
    "isPrivate": false
  }
  ```
- **Example Response:**
  ```json
  {
    "_id": "new_playlist_id",
    "title": "New Playlist Title",
    "description": "New Playlist Description",
    "userId": "user_id",
    "userName": "Username",
    "songs": [],
    "isPrivate": false,
    "type": "Playlist",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

#### Edit Playlist
- **Endpoint:** `/api/playlists/:id`
- **Example Request:**
  ```json
  {
    "title": "Updated Playlist Title",
    "description": "Updated Playlist Description",
    "isPrivate": true
  }
  ```
- **Example Response:**
  ```json
  {
    "_id": "updated_playlist_id",
    "title": "Updated Playlist Title",
    "description": "Updated Playlist Description",
    "userId": "user_id",
    "userName": "Username",
    "songs": [
      "song_id_1",
      "song_id_2",
      // Additional song ids...
    ],
    "isPrivate": true,
    "type": "Playlist",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

### Song Routes 🎧

#### Get All Songs
- **Endpoint:** `/api/songs`
- **Example Response:**
  ```json
  [
    {
      "_id": "song_id",
      "title": "Song Title",
      "duration": "Song Duration",
      "coverImage": "song_cover_url",
      "artistes": [
        "artist_id_1",
        "artist_id_2",
        // Additional artist ids...
      ],
      "artistIds": [
        "artist_id_1",
        "artist_id_2",
        // Additional artist ids...
      ],
      "likes": {
        "user_id_1": true,
        "user_id_2": false,
        // Additional user ids...
      },
      "songUrl": "song_url",
      "type": "Song"
    },
    //

 Additional songs...
  ]
 

#### Get Top Songs
- **Endpoint:** `/api/songs/top`
- **Example Response:**
  ```json
  [
    {
      "_id": "top_song_id",
      "title": "Top Song Title",
      "duration": "Top Song Duration",
      "coverImage": "top_song_cover_url",
      "artistes": [
        "top_artist_id_1",
        "top_artist_id_2",
        // Additional top artist ids...
      ],
      "artistIds": [
        "top_artist_id_1",
        "top_artist_id_2",
        // Additional top artist ids...
      ],
      "likes": {
        "user_id_1": true,
        "user_id_2": false,
        // Additional user ids...
      },
      "songUrl": "top_song_url",
      "type": "Song"
    },
    // Additional top songs...
  ]
  ```

#### Get New Releases
- **Endpoint:** `/api/songs/releases`
- **Example Response:**
  ```json
  [
    {
      "_id": "release_song_id",
      "title": "Release Song Title",
      "duration": "Release Song Duration",
      "coverImage": "release_song_cover_url",
      "artistes": [
        "release_artist_id_1",
        "release_artist_id_2",
        // Additional release artist ids...
      ],
      "artistIds": [
        "release_artist_id_1",
        "release_artist_id_2",
        // Additional release artist ids...
      ],
      "likes": {
        "user_id_1": true,
        "user_id_2": false,
        // Additional user ids...
      },
      "songUrl": "release_song_url",
      "type": "Song"
    },
    // Additional release songs...
  ]
  ```

#### Get Random Songs
- **Endpoint:** `/api/songs/random`
- **Example Response:**
  ```json
  [
    {
      "_id": "random_song_id",
      "title": "Random Song Title",
      "duration": "Random Song Duration",
      "coverImage": "random_song_cover_url",
      "artistes": [
        "random_artist_id_1",
        "random_artist_id_2",
        // Additional random artist ids...
      ],
      "artistIds": [
        "random_artist_id_1",
        "random_artist_id_2",
        // Additional random artist ids...
      ],
      "likes": {
        "user_id_1": true,
        "user_id_2": false,
        // Additional user ids...
      },
      "songUrl": "random_song_url",
      "type": "Song"
    },
    // Additional random songs...
  ]
  ```

#### Get Popular Songs Around You
- **Endpoint:** `/api/songs/popular`
- **Example Response:**
  ```json
  [
    {
      "_id": "popular_song_id",
      "title": "Popular Song Title",
      "duration": "Popular Song Duration",
      "coverImage": "popular_song_cover_url",
      "artistes": [
        "popular_artist_id_1",
        "popular_artist_id_2",
        // Additional popular artist ids...
      ],
      "artistIds": [
        "popular_artist_id_1",
        "popular_artist_id_2",
        // Additional popular artist ids...
      ],
      "likes": {
        "user_id_1": true,
        "user_id_2": false,
        // Additional user ids...
      },
      "songUrl": "popular_song_url",
      "type": "Song"
    },
    // Additional popular songs...
  ]
  ```

#### Like a Song
- **Endpoint:** `/api/songs/like/:id`
- **Example Request:**
  ```json
  {
    "userId": "user_id",
    "like": true
  }
  ```
- **Example Response:**
  ```json
  {
    "_id": "liked_song_id",
    "title": "Liked Song Title",
    "duration": "Liked Song Duration",
    "coverImage": "liked_song_cover_url",
    "artistes": [
      "liked_artist_id_1",
      "liked_artist_id_2",
      // Additional liked artist ids...
    ],
    "artistIds": [
      "liked_artist_id_1",
      "liked_artist_id_2",
      // Additional liked artist ids...
    ],
    "likes": {
      "user_id_1": true,
      "user_id_2": false,
      // Additional user ids...
    },
    "songUrl": "liked_song_url",
    "type": "Song"
  }
  ```

### User Routes 👤

#### Log In
- **Endpoint:** `/api/users/login`
- **Example Request:**
  ```json
  {
    "username": "user_username",
    "password": "user_password"
  }
  ```
- **Example Response:**
  ```json
  {
    "_id": "user_id",
    "username": "user_username",
    "favorites": [
      "favorite_song_id_1",
      "favorite_song_id_2",
      // Additional favorite song ids...
    ],
    "playlists": [
      "user_playlist_id_1",
      "user_playlist_id_2",
      // Additional user playlist ids...
    ]
  }
  ```

#### Register
- **Endpoint:** `/api/users/register`
- **Example Request:**
  ```json
  {
    "username": "new_user_username",
    "password": "new_user_password"
  }
  ```
- **Example Response:**
  ```json
  {
    "_id": "new_user_id",
    "username": "new_user_username",
    "favorites": [],
    "playlists": []
  }
  ```

#### Get User's Favorite Songs
- **Endpoint:** `/api/users/favorites`
- **Example Response:**
  ```json
  [
    {
      "_id": "user_favorite_song_id_1",
      "title": "User Favorite Song Title 1",
      "duration": "User Favorite Song Duration 1",
      "coverImage": "user_favorite_song_cover_url_1",
      "artistes": [
        "user_favorite_artist_id_1",
        "user_favorite_artist_id_2",
        // Additional user favorite artist ids...
      ],
      "artistIds": [
        "user_favorite_artist_id_1",
        "user_favorite_artist_id_2",
        // Additional user favorite artist ids...
      ],
      "likes": {
        "user_id_1": true,
        "user_id_2": false,
        // Additional user ids...
      },
      "songUrl": "user_favorite_song_url_1",
      "type": "Song"
    },
    // Additional user favorite songs...
  ]
  ```


## Installation 🚀

### Backend Installation

1. Clone the backend repository:

    ```bash
    git clone https://github.com/Hamed-Hasan/Building-Singularity-product-solution-backend-.git
    cd Building-Singularity-product-solution-backend-
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
    JWT_SECRET=YOUR_JWT_SECRET
    ```

4. Run the backend server:

    ```bash
    npm start
    ```

    The backend will run on `http://localhost:5000` by default.

### Frontend Installation

1. Clone the frontend repository:

    ```bash
    git clone https://github.com/Hamed-Hasan/Building-Singularity-product-solution-frontend.git
    cd Building-Singularity-product-solution-frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up backend API URL:

    Create a `.env` file in the root directory and add the following:

    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Run the frontend development server:

    ```bash
    npm run dev
    ```

    The frontend will run on `http://localhost:5471` by default.

Now, you have both the backend and frontend up and running. Open your browser and go to [http://localhost:5471](http://localhost:5471) to explore BeatBox locally.

Feel the rhythm, experience the Music, and let BeatBox be your musical companion! 🎵🎉
