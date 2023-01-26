import React, { useState, useEffect } from "react";
import Layout from "../components/Layout.js";
import * as pdfjsLib from "pdfjs-dist/webpack";
import sample from "/static/sample.pdf";
import * as styles from "../styles/resume.module.css";
import CIcon from "@coreui/icons-react";
import {
  cilArrowCircleLeft,
  cilArrowCircleRight,
  cilDataTransferDown,
} from "@coreui/icons";

export default function Resume() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfDoc, setPdfDoc] = useState(null);

  const renderPage = (page) => {
    var scale = 1.5;
    var viewport = page.getViewport({ scale: scale });
    var outputScale = window.devicePixelRatio || 1;
    var canvas = document.getElementById("pdf-preview");
    var context = canvas.getContext("2d");
    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = Math.floor(viewport.width) + "px";
    canvas.style.height = Math.floor(viewport.height) + "px";
    var transform =
      outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
    var renderContext = {
      canvasContext: context,
      transform: transform,
      viewport: viewport,
    };
    page.render(renderContext);
  };

  const handlePagination = (operator) => {
    switch (operator) {
      case "+":
        if (currentPage + 1 <= pdfDoc.numPages) setCurrentPage(currentPage + 1);
        break;
      case "-":
        if (currentPage - 1 >= 1) setCurrentPage(currentPage - 1);
        break;
      default:
        setCurrentPage(1);
        break;
    }
  };
  useEffect(() => {
    var loadingTask = pdfjsLib.getDocument(sample);
    loadingTask.promise.then((pdf) => {
      setPdfDoc(pdf);
      pdf.getPage(currentPage).then((page) => {
        renderPage(page);
      });
    });
  }, []);

  useEffect(() => {
    if (pdfDoc) {
      pdfDoc.getPage(currentPage).then((page) => {
        renderPage(page);
      });
    }
  }, [currentPage]);

  return (
    <Layout>
      <div className={styles.container}>
        {pdfDoc && (
          <div className={styles.menu}>
            <div className={styles.menuWrapper}>
              <button
                className={styles.button}
                onClick={() => handlePagination("-")}
              >
                <CIcon icon={cilArrowCircleLeft} width={25} color="white" />
              </button>
              <p className={styles.pagination}>
                {currentPage}/{pdfDoc.numPages}
              </p>
              <button
                className={styles.button}
                onClick={() => handlePagination("+")}
              >
                <CIcon icon={cilArrowCircleRight} width={25} color="white" />
              </button>
              <button className={styles.button}>
                <CIcon icon={cilDataTransferDown} width={25} color="white" />
              </button>
            </div>
          </div>
        )}
        <canvas id="pdf-preview" />
      </div>
    </Layout>
  );
}
