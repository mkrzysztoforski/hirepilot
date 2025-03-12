📌 README.md for HirePilot

Here’s a structured GitHub README for your HirePilot app, including a description, tech stack, setup instructions, and future plans. 🚀

⸻

HirePilot – Your Job Application Tracker

🚀 HirePilot helps you track your job applications, manage interview stages, and keep an eye on salary offers – all in one place!

🔹 Stay organized – Easily track the companies you applied to.
🔹 Monitor progress – Update the status of your applications.
🔹 Compare salaries – See which offers are best.

⸻

🛠️ Tech Stack

Frontend:

✅ Angular (TypeScript) – Framework for building the UI
✅ RxJS – Reactive programming

Backend & Database:

✅ Firebase Firestore – NoSQL database for storing job applications
✅ Firebase Authentication – User login system

⸻

📸 Screenshots (Coming Soon)

⸻

🚀 Features

✔ User Authentication (Email & Password login)

🎯 Planned Features:
⬜ Track job applications (company, position, salary, status)
⬜ Status updates (Applied, HR Interview, Tech Interview, Offer, Rejected)
⬜ Filter & sort applications
⬜ Calendar integration for interview reminders
⬜ Export data as CSV/PDF
⬜ Dark mode
⬜ AI-powered job recommendation

⸻

🛠️ Setup & Installation

1️⃣ Clone the repository

git clone https://github.com/your-username/hirepilot.git
cd hirepilot

2️⃣ Install dependencies

npm install

3️⃣ Add Firebase configuration
	1.	Go to Firebase Console
	2.	Create a project & enable Firestore + Authentication
	3.	Copy your Firebase config into:
📂 src/environments/environment.ts

export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};

4️⃣ Run the app

ng serve

Visit http://localhost:4200/ in your browser. 🎉

⸻

📌 Contributing

Want to contribute? Fork this repo and submit a pull request.

⸻

📜 License

MIT License – Free to use and modify.
