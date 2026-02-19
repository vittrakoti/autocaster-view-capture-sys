import { Routes, Route } from "react-router-dom";
// images pages
import Home from "./pages/Home";
import ModeSelection from "./pages/ModeSelection";
import PhotoPreparationPg from "./pages/photos/PhotoPreparationPg";
import ArigatoMessage from "./pages/ThankyouMessage";
import PhotoPreviewPg from "./pages/photos/PhotoPreviewPg";
import PhotoProgressBarPg from "./pages/photos/PhotoProgressBarPg";
import LibraryComponents from "./components/LibraryComponents";
import PhotoDownload from "./pages/photos/PhotoDownload"
import StripeService from "./pages/services/StripeService";
//video 3 sec pages
import Video3SecPreparationPg from "./pages/video3sec/Video3SecPreparationPg";
import Video3SecPreviewPg from "./pages/video3sec/Video3SecPreviewPg";
import Video3SecProgressBar from "./pages/video3sec/Video3SecProgressBar";
import Video3SecRecording from "./pages/video3sec/Video3SecRecordingPg";
// Components
import Footer from "./components/Footer";
import { OverlayProvider } from "./context/OverlayContext";

function App() {
  
  return (
  <OverlayProvider> {/* wrap everything */}
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1">
        <Routes>
          {/* image route */}
          <Route path="/" element={<Home />} />
          <Route path="/mode-selection" element={<ModeSelection />} />
          <Route path="/photo-preparation" element={<PhotoPreparationPg />} />
          <Route path="/saving-photo" element={<PhotoProgressBarPg />} />
          <Route path="/photo-preview" element={<PhotoPreviewPg />} />
          <Route path="/photo-download" element={<PhotoDownload />} />
          <Route path="/payment-gateway" element={<StripeService />} />
          <Route path="/thankyou-message" element={<ArigatoMessage />} />
          <Route path="/library" element={<LibraryComponents />} />

          {/* video 3 sec route */}
          <Route path="/take-3sec-video" element={<Video3SecPreparationPg />} />
          <Route path="/video-preview-3sec" element={<Video3SecPreviewPg />} />
          <Route path="/saving-video-3sec" element={<Video3SecProgressBar/>} />
          <Route path="/recording-video-3sec" element={<Video3SecRecording/>} />

        </Routes>
      </main>
      {/* Footer */}
      <Footer />
      
    </div>
    </OverlayProvider>
  );
}

export default App;
