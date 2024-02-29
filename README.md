## "HTL Workshop-Zertifikat: Frontend - Designauswahl und Namenseingabe, Backend - mit anschliessendem QR-Code-Download von Server"
---
### Inhaltsverzeichnis:

#### 1. Backend Download-Button, QR Code, auf Frontend landing Page 
#### 2. Hinweise 
	2.1 Organisation
	2.2 Wer macht was
	2.3 Next Week 2024/03/07 Abgabe Präsentation: Wie, Wer,
	2.4 bisher:
	2.5 To Do List
	2.6 Tuorials 
#### 3. Dokumentation
#### 4. Teams
	4.1 Es gibt zwei Teams: Frontend = Extern & Backend = Wir
#### 5. Vorschläge
	5.1 Backend Download-Button und QR-Code-Generierung Keywords:
	5.2 Hinweise für die Umsetzung PDF:
	5.3 Vorschlag für die Implementierung (Datenbank):
	5.4 Vorschlag für die Implementierung (Frontend):

#### 6. Importend Research links:
---

# Inhalt

## 1. Backend Download-Button, QR Code, auf Frontend landing Page 

##### Ablauf grob:

   Webformular zur Auswahl des Zertifikat-Designs und Eingabe der Namen der Teilnehmer:
        Ein von einem Frontend-Team bereitgestelltes Webformular ermöglicht den Teilnehmern die Auswahl des gewünschten Designs für ihr HTL Workshop-Zertifikat und die Eingabe ihrer Namen.

   Generierung des QR-Codes und Bereitstellung für den Download:
        Nach dem Ausfüllen des Formulars wird ein Download-Button angezeigt, der die Generierung eines QR-Codes auslöst.
        Dieser QR-Code ermöglicht den Download des Zertifikats von einem Server aus.

##### Eigenschaften des Buttons:

1. Erstellt wird ein Screenshot/PDF der aktuellen Seite (ausgefülltes Zertifikat eines Benutzers)   
2. Screenshot/PDF an einen Server senden. 
3. Server generiert QR CODE -> Dieser wird zurück an die Main Page gesendet. 
4. User kann nun Scannen und erhält Download file
5. Nach erfolgreichem Download wird Zertifikat aus Datenbank gelöscht! (preventing DDOS)

## 2. Hinweise 

### 2.1 Organisation 

		2.2 Wer macht was:
		2.3 Next Week 2024/03/07 Abgabe Präsentation: Wie, Wer,
  		2.4 bisher:
		2.5 To Do List:

### 2.2 Tutorials 

- Flo, Youtube Tutorial [Github Desktop](https://youtu.be/8Dd7KRpKeaE?si=P5atVynZv97M06e_)

- Arbeiten im Browser mit Visual Studio Code (VS.Code): öffnet zwei Browser Fenster, in beiden Fenstern im Repository Anmelden. Jetzt könnt Ihr VOR DIESE ADRESSE genau hier --> https://github.com/bakihome/ZertifikatDownload dieses snippet eintragen -- vscode.dev/ -- also wie folgt -- vscode.dev/https://github.com/bakihome/ZertifikatDownload -- und enter drücken. // es öffnet sich daraufhin - Visual Studio Code innerhalb des Browsers -
oder ihr klickt [hier](https://vscode.dev/github/bakihome/ZertifikatDownload) und werdet so zum - VS.Code im Browser - Rediracted:) ExplorationMode

- ReadMe- Github-Wiki
	- Hier gibts kleine hints

## 3. Dokumentation

	3.1 Prototyp Frontend-Team

	3.2 Ganz unten kann eine _Link Dokumentation_ geführt werden (dient der übersicht und nachvollziehbarkeit der Recherchen wer möchte)

## 4. Teams
   
### 4.1 Es gibt zwei Teams: Frontend = Extern & Backend = Wir

- **Das Frontend - Team**: stellt die Benutzeroberfläche bereit, über die die Benutzer das Workshop-Zertifikat auswählen und ihren Namen eingeben können. Sie müssen Schnittstellen bereitstellen, um die eingegebenen Daten an das Backend-Team zu senden.
    
- **API-Endpunkte**: Definieren Sie klare API-Endpunkte, über die das Backend-Team Daten empfangen kann.
- **Datenformat**: Vereinbaren eines konsisten Datenformates, das sowohl vom Frontend-Team als auch vom Backend-Team verstanden wird, z. B. JSON.

##### **Backend-Team** - zuständig für das Speichern der Zertifikate auf dem Server und das Bereitstellen von QR-Codes für den Download.
    
 - **Speichern von Zertifikaten**: Implementierung von einem Mechanismus zum Speichern der Zertifikate auf dem Server, z. B. in einer Datenbank.
 - **QR-Code-Generierung**: Implementierung einer Funktion, um QR-Codes für jedes gespeicherte Zertifikat zu generieren und wieder auf die Mainpage sendet.
 - **API-Endpunkte**: API-Endpunkte zum Empfangen von Daten, vom Frontend-Team und zum Bereitstellen von Zertifikaten und QR-Codes.

- **PDF |or Screenshot Generierung**:

    - Probleme: PDF übernimmt nicht Design der Website sondern nur Text // sure fix? // Bastian hatte das wiederlegt
    - Probleme: PDF - Wie bekommt man das als A4 Format? // sure fix? // Chris hat auch hier etwas
    - Probleme: Screenshot sollte nur Zertifikat fenster aufnehmen nicht den ganzen Bildschirm // sure fix?

##### **Frontend - Team**: Dieses Team stellt die Benutzeroberfläche bereit, über die die Teilnehmer das Workshop-Zertifikat auswählen und ihren Namen eingeben können. 
Sie müssen Schnittstellen bereitstellen, um die eingegebenen Daten an das Backend-Team zu senden.
    
- **API-Endpunkte**: Definieren klarer API-Endpunkte, über die das Backend-Team die Daten empfangen können.
- **Datenformat**: Vereinbaren Sie ein Datenformat, das sowohl vom Frontend-Team als auch vom Backend-Team verstanden wird, z. B. JSON.
- Das Frontend-Team kann einen Dienst oder eine Bibliothek verwenden, um dynamisch ein PDF-Dokument zu generieren, das den gewünschten Teil der Website (das Zertifikat) enthält.
- Sie können beispielsweise Bibliotheken wie Puppeteer (für Node.js) oder WeasyPrint (für Python) verwenden, um den gewünschten Bereich der Website als PDF zu rendern und zu speichern.

- **Screenshots**:
    
    - Hierfür können Sie ebenfalls Puppeteer oder ähnliche Tools verwenden, um den Bereich der Website, der das Zertifikat enthält, zu identifizieren und einen Screenshot davon zu machen

## 5. Vorschläge Implementierung:

Um dieses Ziel zu erreichen, benötigen wir eine Kombination aus HTML, JavaScript und Server-seitiger Technologie wie z.B. Node.js oder PHP. Hier ist eine allgemeine Anleitung, wie wir vorgehen könnten:

**5.1 Backend Download-Button und QR-Code-Generierung:**

- Erstellen Sie eine Node.js-Anwendung, die Express.js verwendet, um API-Endpunkte bereitzustellen.
- Implementieren Sie Logik zum Speichern von Zertifikaten in einer Datenbank (z. B. MongoDB).
- Integrieren Sie eine QR-Code-Generierungs-Bibliothek wie `qrcode` oder `node-qrcode`.
- Sorgen Sie dafür, dass der Download-Button mit einem API-Endpunkt verbunden ist, der den generierten QR-Code zurückgibt.

```JavaScript

// Backend mit Node.js und Express.js
const express = require('express');
const qr = require('qrcode');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Beispiel für das Speichern eines Zertifikats
app.post('/certificates', (req, res) => {
    // Hier würde die Logik zum Speichern des Zertifikats in der Datenbank erfolgen
    // Annahme: req.body enthält das Zertifikat
    const certificateData = req.body;
    // Speichern in der Datenbank ...
    res.status(201).send('Zertifikat erfolgreich gespeichert');
});

// Beispiel für die QR-Code-Generierung
app.get('/qr-code', async (req, res) => {
    try {
        const qrCodeData = 'https://example.com/certificate'; // URL zum Herunterladen des Zertifikats
        const qrCode = await qr.toDataURL(qrCodeData);
        res.send(qrCode);
    } catch (err) {
        console.error('Fehler beim Generieren des QR-Codes:', err);
        res.status(500).send('Interner Serverfehler');
    }
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
```

**5.2 Hinweise für die Umsetzung PDF:**

- Definieren Sie klare API-Endpunkte und verwenden Sie ein einheitliches Datenformat (z. B. JSON).
- Verwenden Sie Puppeteer oder WeasyPrint für die PDF-Generierung und stellen Sie sicher, dass das Layout und das A4-Format korrekt sind.
- Nutzen Sie Puppeteer oder ähnliche Tools, um nur den relevanten Bereich der Website für den Screenshot aufzunehmen.

```JavaScript

// Beispiel für die Verwendung von Puppeteer für die PDF-Generierung

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com/certificate');
    // Hier den relevanten Bereich identifizieren und nur diesen erfassen
    const element = await page.$('.certificate-container');
    await element.screenshot({ path: 'certificate.png' });
    await browser.close();
})();

```
**5.3 Vorschlag für die Implementierung (Datenbank):**


**Node.js-Anwendung mit Express.js und Mongoose erstellen:**
   - npm oder yarn verwenden, um ein neues Node.js-Projekt zu initialisieren.
   - Express.js mit `npm install express` installieren.
   - Mongoose mit `npm install mongoose` installieren.
**Schema für Zertifikate definieren und Modell erstellen:**
   - Mongoose verwenden, um ein Schema mit den erforderlichen Feldern zu definieren.
   - Ein Modell basierend auf diesem Schema erstellen, um mit der Datenbank zu interagieren.

```JavaScript
// Beispiel für die Verwendung von MongoDB als Datenbank

const mongoose = require('mongoose');

// Verbindung zur MongoDB-Datenbank herstellen
mongoose.connect('mongodb://localhost:27017/certificates', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Definieren des Zertifikat-Schemas
const certificateSchema = new mongoose.Schema({
    name: String,
    design: String,
    // Weitere Felder je nach Bedarf
});

// Modell für Zertifikate erstellen
const Certificate = mongoose.model('Certificate', certificateSchema);

// Funktion zum Speichern eines Zertifikats
const saveCertificate = async (certificateData) => {
    try {
        const certificate = new Certificate(certificateData);
        await certificate.save();
        console.log('Zertifikat erfolgreich gespeichert:', certificate);
        return certificate;
    } catch (error) {
        console.error('Fehler beim Speichern des Zertifikats:', error);
        throw error;
    }
};

module.exports = { saveCertificate };

```
	
**5.4 Vorschlag für die Implementierung (Frontend):**

- Backend: Node.js mit Express.js, Datenbank (z. B. MongoDB), QR-Code-Generierung (z. B. mit `qrcode`), klare API-Endpunkte.
- Frontend: React.js oder Angular, Fetch-API oder Axios für die Kommunikation mit dem Backend, Anzeige des QR-Codes nach dem Klicken auf den Download-Button.

```jsx
// Beispiel für das Frontend mit React.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [certificate, setCertificate] = useState('');
    const [qrCode, setQRCode] = useState('');

    // Funktion zum Speichern des Zertifikats
    const saveCertificate = async () => {
        try {
            const response = await axios.post('/certificates', { /* Zertifikatdaten */ });
            console.log(response.data);
            // Generiere QR-Code nach erfolgreichem Speichern
            const qrCodeResponse = await axios.get('/qr-code');
            setQRCode(qrCodeResponse.data);
        } catch (error) {
            console.error('Fehler beim Speichern des Zertifikats:', error);
        }
    };

    return (
        <div>
            {/* Benutzeroberfläche zum Auswählen des Zertifikats und Eingeben des Namens */}
            <button onClick={saveCertificate}>Zertifikat speichern</button>
            {qrCode && <img src={qrCode} alt="QR-Code" />}
        </div>
    );
}

export default App;

```


## 6. Importend Research links:

https://stackoverflow.com/questions/23359083/how-to-convert-webpage-into-pdf-by-using-python

https://pypi.org/project/pdfkit/ 

https://www.youtube.com/watch?v=46c__islxCg







