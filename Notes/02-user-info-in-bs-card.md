## 🧑‍💻 Tutorial: Create a Simple `UserInfo` React Component with Bootstrap

### 📁 Step 1: Create the Component

Create a new file: `UserInfo.tsx` or `UserInfo.jsx` inside the `src/components` folder.

```tsx
// src/components/UserInfo.tsx
import "./UserInfo.css"; // Optional for custom styles

function UserInfo() {
  let user = {
    name: "John Doe",
    about:
      "Frontend React Developer and UI/UX Designer with 10+ years of experience.",
    profileImg:
      "https://images.pexels.com/photos/6150379/pexels-photo-6150379.jpeg",
    profileUrl: "https://mohammedaeraf.github.io/profile/",
  };

  return (
    <div className="card" style={{ width: "22rem", margin: "1rem auto" }}>
      <img src={user.profileImg} className="card-img-top" alt={user.name} />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.about}</p>
        <a
          href={user.profileUrl}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          View My Profile
        </a>
      </div>
    </div>
  );
}

export default UserInfo;
```

---

### 🎨 Step 2: (Optional) Create `UserInfo.css`

```css
/* src/components/UserInfo.css */
.card-img-top {
  height: 300px;
  object-fit: cover;
}
```

---

### 📄 Step 3: Use `UserInfo` in `App.tsx`

```tsx
// src/App.tsx
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="container mt-5">
      <UserInfo />
    </div>
  );
}

export default App;
```

---

### 💡 Step 4: Ensure Bootstrap is Installed

Install Bootstrap if not already:

```bash
npm install bootstrap
```

And import it in your `main.tsx` or `index.tsx`:

```tsx
import "bootstrap/dist/css/bootstrap.min.css";
```

---

### ✅ Output

You’ll see a neat **Bootstrap card** displaying:

- Profile image
- Name
- About info
- "View My Profile" button linking to the external URL