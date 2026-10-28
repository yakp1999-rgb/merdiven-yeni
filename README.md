# Merdiven Atölyesi

Fotoğraf referanslarına dayalı iki merdiven enstalasyonunu inceleme ve karşılaştırma sitesi.

- **Model 1:** Korunan özgün çalışma.
- **Model 2:** Sıkışma, dönme ve açılma hareketlerini yorumlayan siyah enstalasyon; ters merdiven ve kayan pencere ızgaraları.
- Model indirmeleri: SketchUp `.skp` ve `.skb`.
- Çizimler: SVG plan izdüşümü ve iki kesit; 50 × 70 cm, 1/50 PDF pafta.

## Çalıştırma

Node.js kurulu olmalıdır. Ek paket kurulumu gerekmez.

```sh
npm run dev
```

Alternatif:

```sh
node server.cjs
```

Ardından http://localhost:4174 adresini açın. Model 1, Model 2 ve karşılaştırma üst menüdedir.

## Dosyalar

- `index.html`: Birleşik arayüz.
- `model1/`: Korunan ilk model ve dosyaları.
- `model2.html`, `app.js`, `assets/model.json`: İkinci modelin görüntüleyicisi ve geometrisi.
- `downloads/`: İkinci modelin SketchUp ve SVG dosyaları.
- `model-2-plan-kesit-50x70.pdf`: Baskı paftası. %100 gerçek boyut ile basılmalıdır.
- `TASARIM-NOTLARI.md`: Tasarım açıklamaları.

Ölçüler fotoğraflardan yorumlanan yaklaşık model değerleridir. Plan çizimi, kat kotunda kesilmiş mimari plan yerine üstten izdüşümdür.
