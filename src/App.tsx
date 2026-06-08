import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Constellation } from "./pages/Constellation";
import { Members } from "./pages/Members";
import { Explore } from "./pages/Explore";
import { FindTeam } from "./pages/FindTeam";
import { Events } from "./pages/Events";
import { AIRadar } from "./pages/AIRadar";
import { Messages } from "./pages/Messages";
import { CoffeeChat } from "./pages/CoffeeChat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="constellation" element={<Constellation />} />
          <Route path="members" element={<Members />} />
          <Route path="explore" element={<Explore />} />
          <Route path="find-team" element={<FindTeam />} />
          <Route path="events" element={<Events />} />
          <Route path="ai-radar" element={<AIRadar />} />
          <Route path="messages" element={<Messages />} />
          <Route path="coffee-chat" element={<CoffeeChat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
