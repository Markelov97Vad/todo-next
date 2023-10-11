import "bootstrap/dist/css/bootstrap.css";
import styles from './page.module.css';
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navigation from "./components/Navigation/Navigation";
import { Providers } from "./store/provider";
import { dataTab } from "./utils/constants";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Todo",
  description: "Test task for Drafter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <main className="vh-100">
            <section className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card ${styles.card}">
                    <div className={`card-body ${styles.card__body}`}>
                    <Navigation data={dataTab}/>
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
