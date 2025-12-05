import logo from "../Asset/Bacground/UpZero(2).png";

export default function Kontak() {
  return (
    <>
      <style>{`
/* === GLOBAL WRAPPER === */
.contact-wrapper {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      to bottom right,
      rgba(60, 60, 90, 0.9),
      rgba(40, 40, 60, 0.9)
    );
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  overflow: hidden;
}

.contact-wrapper::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
  opacity: 0.18; /* more muted than before */
  pointer-events: none;
}

.contact-container {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 100px;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 20px;
}

/* ====================== */
/*      LANYARD AREA      */
/* ====================== */

.lanyard-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0);}
  50% { transform: translateY(-10px);}
  100% { transform: translateY(0);}
}

.lanyard-strap {
  width: 6px;
  height: 120px;
  background: linear-gradient(to bottom, #333, #666);
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
}

/* Card flip */
.card-flip-container {
  width: 260px;
  height: 360px;
  perspective: 1000px;
  margin-top: 20px;
  cursor: pointer;
}

.card-flip-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card-flip-container:hover .card-flip-inner {
  transform: rotateY(180deg);
}

/* Card structure */
.card {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  backface-visibility: hidden;
  box-shadow: 0 12px 25px rgba(0,0,0,0.25);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* FRONT */
.card-front {
  background: white;
}

.avatar {
  width: 110px;
  height: 110px;
  background: linear-gradient(to bottom right, #4f46e5, #9333ea);
  border-radius: 50%;
  font-size: 45px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
}

.name-title {
  font-size: 26px;
  font-weight: bold;
  color: #333;
}

.role {
  color: #777;
  margin-top: -5px;
}

.id-badge {
  margin-top: 15px;
  padding: 6px 16px;
  background: #f2f2f2;
  border-radius: 30px;
  color: #666;
  font-size: 14px;
}

/* BACK */
.card-back {
  background: linear-gradient(to bottom right, #fb7185, #ef4444);
  color: white;
  transform: rotateY(180deg);
}

.company {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
}

.company-sub {
  text-align: center;
  opacity: 0.9;
  margin-bottom: 20px;
}

/* Barcode */
.barcode {
  width: 100%;
  height: 90px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  padding: 8px;
  gap: 4px;
}

.barcode-line {
  width: 3px;
  background: #222;
  border-radius: 1px;
}

/* Hover note */
.hover-note {
  color: white;
  margin-top: 12px;
  opacity: 0.8;
  font-size: 14px;
}

/* ====================== */
/*   CONTACT SECTION      */
/* ====================== */

.contact-card {
  background: white;
  border-radius: 25px;
  padding: 40px;
  width: 380px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
  animation: fadeIn 1.2s ease;
}

@keyframes fadeIn {
  from { opacity:0; transform: translateY(40px);}
  to { opacity:1; transform: translateY(0);}
}

.contact-title {
  font-size: 32px;
  font-weight: bold;
  color: #222;
}

.contact-desc {
  color: #666;
  margin-bottom: 35px;
}

/* ITEM */
.contact-item {
  background: #f3f3f3;
  border-radius: 15px;
  padding: 18px;
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.3s ease;
}

.contact-item:hover {
  transform: translateX(6px);
  background: #e8e8e8;
  box-shadow: 0 5px 12px rgba(0,0,0,0.15);
}

.contact-icon {
  width: 52px;
  height: 52px;
  background: #ddd;
  border-radius: 12px;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-label {
  font-size: 12px;
  text-transform: uppercase;
  color: #888;
}

.contact-value {
  font-size: 16px;
  color: #333;
}
      `}</style>

      {/* ======================== */}
      {/*     MAIN CONTENT         */}
      {/* ======================== */}

      <div className="contact-wrapper" id="kontak">
        <div className="contact-container">
          {/* === Lanyard Section === */}
          <div className="lanyard-section">
            <div className="lanyard-strap"></div>

            <div className="card-flip-container">
              <div className="card-flip-inner">
                {/* FRONT */}
                <div className="card card-front">
                  <div className="avatar">👤</div>
                  <h2 className="name-title">Lalu Ardita Arip</h2>
                  <p className="role">Founder</p>
                  <div className="id-badge">ID: #A001</div>
                </div>

                {/* BACK */}
                <div className="card card-back">
                  <h2 className="company">UP Zero</h2>
                  <p className="company-sub">Innovation & Excellence</p>

                  <div className="barcode">
                    {[60, 80, 40, 90, 50, 70, 85, 45, 95, 55, 75, 65].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="barcode-line"
                          style={{ height: h + "%" }}
                        ></div>
                      )
                    )}
                  </div>
                  <div>
                    <img src={logo} alt="gambar upzero" />
                  </div>
                </div>
              </div>
            </div>

            <p className="hover-note">✨ Jangan ragu hubungi kami</p>
          </div>

          {/* === CONTACT Section === */}
          <div className="contact-card">
            <h1 className="contact-title">Hubungi Saya</h1>
            <p className="contact-desc">
              Jangan ragu untuk menghubungi kapan saja.
            </p>

            {[
              {
                label: "Instagram",
                value: "@upzerooffice",
                icon: "📷",
                url: "https://instagram.com/upzerooffice",
              },
              {
                label: "Telepon",
                value: "+62 859 6415 0027",
                icon: "📱",
                url: "tel:+6285964150027",
              },
              {
                label: "Email",
                value: "upzero.office@gmail.com",
                icon: "✉️",
                url: "mailto:upzero.office@gmail.com",
              },
              {
                label: "Alamat",
                value: "Jl. Raden Patik Wadira, Nyiur Tebel, Kec. Sukamulia",
                icon: "📍",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="contact-item"
                onClick={() => item.url && window.open(item.url, "_blank")}
              >
                <div className="contact-icon">{item.icon}</div>

                <div className="contact-text">
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
