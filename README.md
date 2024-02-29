# Auf einer Webseite für "Kreative Manga IT Zertifikate" soll einen Button (Download) integriert werden 

## Ganz unten kann eine Link Dokumentation geführt werden!) (dient der übersicht und nachvollziehbarkeit der Recherchen wer möchte)

Überlick:

- Wer macht was: 

- Next Week Abgabe Präsentation:

- bisher:

- Was passieren sollte:

- Vorschläge: 

#### Eigenschaften des Buttons:

1. Erstellt wird ein Screenshot/PDF der aktuellen Seite (ausgefülltes Zertifikat eines Benutzers)   
2. Screenshot/PDF an einen Server senden. 
3. Server generiert QR CODE -> Dieser wird zurück an die Main Page gesendet. 
4. User kann nun Scannen und erhält Download file
5. Nach erfolgreichem Download wird Zertifikat aus Datenbank gelöscht! (preventing DDOS)
   
## Es gibt zwei Teams:

#### **Zertifikatsspeicher-Team** --> WIR --- & --- Webdesign Zertifikat Team --> Extern

- **Das Website-Team**: stellt die Benutzeroberfläche bereit, über die die Benutzer das Workshop-Zertifikat auswählen und ihren Namen eingeben können. Sie müssen Schnittstellen bereitstellen, um die eingegebenen Daten an das Zertifikatsspeicher-Team zu senden.
    
- **API-Endpunkte**: Definieren Sie klare API-Endpunkte, über die das Zertifikatsspeicher-Team Daten empfangen kann.
- **Datenformat**: Vereinbaren eines konsisten Datenformates, das sowohl vom Website-Team als auch vom Zertifikatsspeicher-Team verstanden wird, z. B. JSON.
#### **Zertifikatsspeicher-Team** - zuständig für das Speichern der Zertifikate auf dem Server und das Bereitstellen von QR-Codes für den Download.
    
 - **Speichern von Zertifikaten**: Implementierung von einem Mechanismus zum Speichern der Zertifikate auf dem Server, z. B. in einer Datenbank.
 - **QR-Code-Generierung**: Implementierung einer Funktion, um QR-Codes für jedes gespeicherte Zertifikat zu generieren und wieder auf die Mainpage sendet.
 - **API-Endpunkte**: API-Endpunkte zum Empfangen von Daten, vom Website-Team und zum Bereitstellen von Zertifikaten und QR-Codes.

- **PDF | Screenshot Generierung**:

    - Probleme: PDF übernimmt nicht Design der Website sondern nur Text // sure fix? // Bastian hatte das wiederlegt
    - Probleme: PDF - Wie bekommt man das als A4 Format? // sure fix?
    - Probleme: Screenshot sollte nur Zertifikat fenster aufnehmen nicht den ganzen Bildschirm // sure fix?

#### **Website-Team**: Dieses Team stellt die Benutzeroberfläche bereit, über die die Benutzer das Workshop-Zertifikat auswählen und ihren Namen eingeben können. Sie müssen Schnittstellen bereitstellen, um die eingegebenen Daten an das Zertifikatsspeicher-Team zu senden.
    
- **API-Endpunkte**: Definieren klarer API-Endpunkte, über die das Zertifikatsspeicher-Team die Daten empfangen können.
- **Datenformat**: Vereinbaren Sie ein Datenformat, das sowohl vom Website-Team als auch vom Zertifikatsspeicher-Team verstanden wird, z. B. JSON.
- Das Website-Team kann einen Dienst oder eine Bibliothek verwenden, um dynamisch ein PDF-Dokument zu generieren, das den gewünschten Teil der Website (das Zertifikat) enthält.
- Sie können beispielsweise Bibliotheken wie Puppeteer (für Node.js) oder WeasyPrint (für Python) verwenden, um den gewünschten Bereich der Website als PDF zu rendern und zu speichern.

- **Screenshots**:
    
    - Hierfür können Sie ebenfalls Puppeteer oder ähnliche Tools verwenden, um den Bereich der Website, der das Zertifikat enthält, zu identifizieren und einen Screenshot davon zu machen

Vorschläge:

Um dieses Ziel zu erreichen, benötigen wir eine Kombination aus HTML, JavaScript und Server-seitiger Technologie wie z.B. Node.js oder PHP. Hier ist eine allgemeine Anleitung, wie wir vorgehen könnten:

1. **HTML und CSS**: Erstelle eine einfache Webseite mit einem Button, der den Screenshot auslöst.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webseite mit Screenshot</title>
    <style>
        /* Stil für die Seite */
    </style>
</head>
<body>
    <button id="screenshotButton">Screenshot machen</button>

    <script>
        // JavaScript-Code hier einfügen
    </script>
</body>
</html>
```

2. **JavaScript**: Schreibe JavaScript-Code, der auf den Klick des Buttons reagiert und einen Screenshot der Seite macht.

```javascript
document.getElementById('screenshotButton').addEventListener('click', function() {
    html2canvas(document.body).then(function(canvas) {
        // Canvas-Element erstellt, das den Screenshot enthält
        var imageData = canvas.toDataURL(); // Daten des Screenshots
        // Sende imageData an den Server
        // Du kannst hierfür z.B. fetch() verwenden, um die Daten an einen Server zu senden
    });
});
```

3. **Server-seitige Verarbeitung**: Auf dem Server eine Möglichkeit implementieren, den empfangenen Screenshot zu speichern und einen QR-Code zu generieren, der auf den gespeicherten Screenshot verweist.

4. **QR-Code-Generierung + Download Link**: Nutzen einer geeigneten Bibliothek (z.B. `qrcode` für Node.js oder PHP QR Code), um einen QR-Code zu generieren, der den Download-Link zum Screenshot enthält.

5. **Antwort an den Client**: Senden des QR-Code´s zurück an den Client, damit dieser ihn anzeigen kann.


# Importend Research links:

https://stackoverflow.com/questions/23359083/how-to-convert-webpage-into-pdf-by-using-python

https://pypi.org/project/pdfkit/ 

https://www.youtube.com/watch?v=46c__islxCg







