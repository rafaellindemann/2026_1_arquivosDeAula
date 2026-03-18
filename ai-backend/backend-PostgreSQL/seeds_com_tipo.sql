




```
CREATE DATABASE trunfo_dino;
```

```

CREATE TABLE dino (
    id SERIAL PRIMARY KEY,

    nome VARCHAR(100) NOT NULL,

    altura NUMERIC(6,2),
    comprimento NUMERIC(6,2),
    peso NUMERIC(10,2),

    velocidade NUMERIC(5,2),
    agilidade SMALLINT,
    longevidade SMALLINT,

    numero_magico SMALLINT,

    imagem TEXT,

    fama SMALLINT,

    tipo VARCHAR(20) NOT NULL
);
```




-- IMPORTANTE: rode antes se ainda não existir
ALTER TABLE DINO ADD COLUMN TIPO VARCHAR(20);

-- Observação:
-- terrestre = dinos padrão
-- voador = pterossauros e aves primitivas
-- aquatico = répteis marinhos

-- (arquivo completo já com TIPO aplicado)
-- gemini
-- gemini - com fama
INSERT INTO DINO (NOME, ALTURA, COMPRIMENTO, PESO, VELOCIDADE, AGILIDADE, LONGEVIDADE, NUMERO_MAGICO, IMAGEM, FAMA, TIPO) VALUES
('T-Rex', 3.66, 12.30, 8000.00, 27.00, 4, 2, 7, 'imgs/dino.svg', 10, 'terrestre'),
('Triceratops', 3.00, 9.00, 6000.00, 32.00, 3, 2, 3, 'imgs/dino.svg', 10, 'terrestre'),
('Velociraptor', 0.50, 2.00, 15.00, 64.00, 10, 4, 9, 'imgs/dino.svg', 10, 'terrestre'),
('Braquiossauro', 12.00, 26.00, 58000.00, 12.00, 1, 6, 5, 'imgs/dino.svg', 9, 'terrestre'),
('Estegossauro', 4.00, 9.00, 5000.00, 7.00, 2, 5, 8, 'imgs/dino.svg', 9, 'terrestre'),
('Espinossauro', 5.00, 15.00, 7000.00, 25.00, 3, 4, 2, 'imgs/dino.svg', 9, 'terrestre'),
('Alossauro', 3.00, 8.50, 2000.00, 35.00, 6, 5, 1, 'imgs/dino.svg', 7, 'terrestre'),
('Diplodoco', 6.00, 25.00, 12000.00, 15.00, 1, 3, 10, 'imgs/dino.svg', 8, 'terrestre'),
('Parassaurolofo', 4.00, 10.00, 2500.00, 30.00, 4, 3, 4, 'imgs/dino.svg', 8, 'terrestre'),
('Anquilossauro', 1.70, 7.00, 6000.00, 10.00, 2, 2, 6, 'imgs/dino.svg', 8, 'terrestre'),
('Dilofossauro', 2.00, 6.00, 400.00, 38.00, 8, 7, 7, 'imgs/dino.svg', 8, 'terrestre'),
('Carnotauro', 3.00, 8.00, 1500.00, 50.00, 9, 3, 5, 'imgs/dino.svg', 7, 'terrestre'),
('Giganotossauro', 4.00, 13.00, 8500.00, 30.00, 4, 2, 8, 'imgs/dino.svg', 7, 'terrestre'),
('Iguanodonte', 3.00, 10.00, 3500.00, 24.00, 4, 5, 2, 'imgs/dino.svg', 6, 'terrestre'),
('Paquicefalossauro', 2.00, 4.50, 450.00, 20.00, 5, 4, 9, 'imgs/dino.svg', 7, 'terrestre'),
('Barionix', 2.50, 9.50, 1700.00, 28.00, 5, 5, 1, 'imgs/dino.svg', 6, 'terrestre'),
('Deinonico', 1.00, 3.40, 75.00, 45.00, 10, 7, 3, 'imgs/dino.svg', 5, 'terrestre'),
('Apatossauro', 6.50, 21.00, 22000.00, 12.00, 1, 4, 4, 'imgs/dino.svg', 8, 'terrestre'),
('Compsognato', 0.30, 1.00, 3.00, 55.00, 10, 5, 6, 'imgs/dino.svg', 6, 'terrestre'),
('Maiassaura', 2.50, 9.00, 2800.00, 35.00, 5, 4, 7, 'imgs/dino.svg', 3, 'terrestre'),
('Argentinossauro', 18.00, 35.00, 90000.00, 8.00, 1, 4, 10, 'imgs/dino.svg', 6, 'terrestre'),
('Terizinossauro', 5.00, 10.00, 5000.00, 15.00, 3, 3, 5, 'imgs/dino.svg', 6, 'terrestre'),
('Galimimo', 2.00, 6.00, 450.00, 70.00, 9, 4, 2, 'imgs/dino.svg', 6, 'terrestre'),
('Microrraptor', 0.25, 0.80, 1.00, 20.00, 10, 6, 8, 'imgs/dino.svg', 3, 'voador'),
('Amargassauro', 3.00, 10.00, 2600.00, 18.00, 3, 6, 1, 'imgs/dino.svg', 3, 'terrestre'),
('Coritossauro', 4.00, 9.00, 3000.00, 30.00, 4, 3, 4, 'imgs/dino.svg', 4, 'terrestre'),
('Edmontossauro', 3.50, 12.00, 4000.00, 35.00, 4, 7, 9, 'imgs/dino.svg', 4, 'terrestre'),
('Albertossauro', 3.00, 9.00, 2000.00, 40.00, 6, 4, 3, 'imgs/dino.svg', 5, 'terrestre'),
('Utahraptor', 2.00, 7.00, 500.00, 45.00, 8, 5, 7, 'imgs/dino.svg', 5, 'terrestre'),
('Arqueopterix', 0.30, 0.50, 0.80, 15.00, 9, 2, 6, 'imgs/dino.svg', 7, 'voador'),
('Carcharodontossauro', 4.00, 13.00, 8000.00, 32.00, 4, 6, 5, 'imgs/dino.svg', 5, 'terrestre'),
('Ceratossauro', 2.50, 7.00, 1000.00, 35.00, 7, 5, 2, 'imgs/dino.svg', 5, 'terrestre'),
('Plateossauro', 3.00, 8.00, 4000.00, 20.00, 3, 10, 8, 'imgs/dino.svg', 4, 'terrestre'),
('Celófise', 1.00, 3.00, 25.00, 48.00, 9, 13, 1, 'imgs/dino.svg', 4, 'terrestre'),
('Paquirrinossauro', 2.50, 8.00, 4000.00, 25.00, 3, 5, 10, 'imgs/dino.svg', 4, 'terrestre'),
('Estiracossauro', 1.80, 5.50, 2700.00, 30.00, 4, 3, 4, 'imgs/dino.svg', 5, 'terrestre'),
('Deinoqueiro', 5.00, 11.00, 6400.00, 22.00, 3, 4, 7, 'imgs/dino.svg', 4, 'terrestre'),
('Kentrossauro', 1.50, 4.50, 700.00, 15.00, 3, 8, 9, 'imgs/dino.svg', 3, 'terrestre'),
('Ovirraptor', 1.00, 2.00, 35.00, 45.00, 9, 5, 2, 'imgs/dino.svg', 5, 'terrestre'),
('Protoceratops', 0.60, 1.80, 180.00, 20.00, 5, 5, 5, 'imgs/dino.svg', 5, 'terrestre'),
('Tarbossauro', 3.50, 11.00, 5000.00, 28.00, 5, 3, 8, 'imgs/dino.svg', 4, 'terrestre'),
('Sucomimo', 3.00, 11.00, 3000.00, 25.00, 4, 7, 3, 'imgs/dino.svg', 4, 'terrestre'),
('Herrerassauro', 1.50, 6.00, 350.00, 40.00, 8, 5, 6, 'imgs/dino.svg', 3, 'terrestre'),
('Criolofossauro', 2.50, 6.50, 460.00, 35.00, 7, 4, 1, 'imgs/dino.svg', 3, 'terrestre'),
('Dracorex', 1.50, 3.00, 200.00, 28.00, 6, 4, 10, 'imgs/dino.svg', 4, 'terrestre'),
('Euoplocéfalo', 1.80, 6.00, 2500.00, 10.00, 2, 4, 4, 'imgs/dino.svg', 3, 'terrestre'),
('Gigantorraptor', 3.50, 8.00, 1400.00, 35.00, 7, 5, 7, 'imgs/dino.svg', 3, 'terrestre'),
('Hipsilofodonte', 0.60, 1.80, 20.00, 50.00, 10, 6, 9, 'imgs/dino.svg', 2, 'terrestre'),
('Lambeossauro', 4.00, 9.00, 3000.00, 30.00, 4, 2, 2, 'imgs/dino.svg', 3, 'terrestre'),
('Mapussauro', 4.00, 12.50, 4000.00, 30.00, 4, 4, 5, 'imgs/dino.svg', 3, 'terrestre');


-- Resumo da Escala de Fama aplicada:
-- Fama 10: Ícones absolutos da cultura pop (conhecidos por crianças e idosos).
-- Fama 8-9: Dinossauros "Superstars" (presença garantida em qualquer livro infantil ou filme de aventura).
-- Fama 6-7: Dinossauros conhecidos por quem gosta do tema, mas talvez não pelo público geral.
-- Fama 2-5: Espécies mais obscuras, conhecidas principalmente por entusiastas de paleontologia ou por terem aparecido brevemente em alguma mídia.

-- Lembrete: Não esqueça de rodar um 
ALTER TABLE DINO ADD COLUMN FAMA SMALLINT; 
-- antes de executar este novo insert, se a tabela já existir no seu banco!


-- gemini deck b
INSERT INTO DINO (NOME, ALTURA, COMPRIMENTO, PESO, VELOCIDADE, AGILIDADE, LONGEVIDADE, NUMERO_MAGICO, IMAGEM, FAMA, TIPO) VALUES
('Acrocantossauro', 4.00, 11.50, 6200.00, 30.00, 5, 5, 8, 'imgs/dino.svg', 6, 'terrestre'),
('Majungassauro', 2.50, 7.00, 1100.00, 25.00, 6, 4, 3, 'imgs/dino.svg', 5, 'terrestre'),
('Megalossauro', 3.00, 9.00, 1500.00, 32.00, 5, 11, 10, 'imgs/dino.svg', 7, 'terrestre'),
('Troodon', 0.90, 2.40, 50.00, 50.00, 10, 8, 4, 'imgs/dino.svg', 7, 'terrestre'),
('Nigersauro', 2.00, 9.00, 4000.00, 15.00, 3, 6, 1, 'imgs/dino.svg', 6, 'terrestre'),
('Torossauro', 2.50, 8.00, 6000.00, 25.00, 3, 5, 7, 'imgs/dino.svg', 5, 'terrestre'),
('Ouranossauro', 3.00, 7.00, 2200.00, 28.00, 4, 13, 9, 'imgs/dino.svg', 5, 'terrestre'),
('Psitacossauro', 0.80, 2.00, 25.00, 20.00, 7, 20, 2, 'imgs/dino.svg', 4, 'terrestre'),
('Camarassauro', 6.00, 18.00, 18000.00, 15.00, 2, 10, 5, 'imgs/dino.svg', 6, 'terrestre'),
('Sinoceratops', 2.50, 6.00, 2000.00, 25.00, 4, 3, 8, 'imgs/dino.svg', 7, 'terrestre'),
('Concavenator', 2.00, 6.00, 400.00, 35.00, 8, 5, 3, 'imgs/dino.svg', 5, 'terrestre'),
('Sinosauropteryx', 0.40, 1.20, 1.00, 40.00, 10, 4, 6, 'imgs/dino.svg', 4, 'terrestre'),
('Daspletossauro', 3.00, 9.00, 2500.00, 35.00, 5, 3, 1, 'imgs/dino.svg', 5, 'terrestre'),
('Eorraptor', 0.30, 1.00, 10.00, 45.00, 10, 5, 7, 'imgs/dino.svg', 6, 'terrestre'),
('Edmontonia', 1.60, 6.50, 3000.00, 12.00, 2, 6, 9, 'imgs/dino.svg', 4, 'terrestre'),
('Sauropelta', 1.50, 5.00, 1500.00, 15.00, 3, 10, 2, 'imgs/dino.svg', 4, 'terrestre'),
('Mussauro', 1.00, 3.00, 150.00, 20.00, 5, 12, 4, 'imgs/dino.svg', 3, 'terrestre'),
('Hadrossauro', 3.50, 8.00, 3000.00, 25.00, 4, 5, 8, 'imgs/dino.svg', 5, 'terrestre'),
('Shunosauro', 4.00, 10.00, 3500.00, 18.00, 3, 10, 10, 'imgs/dino.svg', 3, 'terrestre'),
('Torvossauro', 3.50, 10.00, 3600.00, 30.00, 5, 7, 6, 'imgs/dino.svg', 4, 'terrestre'),
('Yangchuanossauro', 3.50, 10.50, 3000.00, 32.00, 5, 10, 1, 'imgs/dino.svg', 3, 'terrestre'),
('Tuojiangossauro', 2.00, 7.00, 2500.00, 12.00, 2, 8, 5, 'imgs/dino.svg', 4, 'terrestre'),
('Saltassauro', 4.00, 12.00, 7000.00, 15.00, 3, 10, 3, 'imgs/dino.svg', 4, 'terrestre'),
('Gastonia', 1.20, 5.00, 1900.00, 10.00, 2, 11, 7, 'imgs/dino.svg', 3, 'terrestre'),
('Masiakassauro', 0.60, 2.00, 40.00, 35.00, 9, 4, 2, 'imgs/dino.svg', 3, 'terrestre'),
('Alioramus', 2.00, 6.00, 800.00, 40.00, 7, 5, 9, 'imgs/dino.svg', 3, 'terrestre'),
('Citipati', 1.50, 3.00, 80.00, 38.00, 8, 6, 4, 'imgs/dino.svg', 4, 'terrestre'),
('Pentaceratops', 3.00, 8.00, 5500.00, 25.00, 3, 3, 10, 'imgs/dino.svg', 5, 'terrestre'),
('Muttaburrassauro', 3.00, 8.00, 2800.00, 24.00, 4, 8, 1, 'imgs/dino.svg', 3, 'terrestre'),
('Chasmosaurus', 2.30, 5.00, 3000.00, 25.00, 4, 2, 5, 'imgs/dino.svg', 4, 'terrestre'),
('Centrossauro', 2.00, 5.50, 2300.00, 25.00, 4, 2, 8, 'imgs/dino.svg', 4, 'terrestre'),
('Scelidossauro', 1.20, 4.00, 270.00, 20.00, 5, 8, 2, 'imgs/dino.svg', 3, 'terrestre'),
('Dryossauro', 1.50, 3.50, 100.00, 45.00, 9, 8, 7, 'imgs/dino.svg', 3, 'terrestre'),
('Monolofossauro', 1.80, 5.00, 450.00, 35.00, 7, 5, 3, 'imgs/dino.svg', 4, 'terrestre'),
('Gigantospinossauro', 1.50, 4.50, 700.00, 15.00, 4, 5, 6, 'imgs/dino.svg', 3, 'terrestre'),
('Austrorraptor', 1.50, 5.00, 350.00, 42.00, 8, 3, 9, 'imgs/dino.svg', 4, 'terrestre'),
('Dromaeossauro', 0.60, 2.00, 15.00, 50.00, 10, 7, 1, 'imgs/dino.svg', 5, 'terrestre'),
('Erlikossauro', 2.50, 6.00, 500.00, 20.00, 4, 4, 4, 'imgs/dino.svg', 3, 'terrestre'),
('Avimimo', 1.00, 1.50, 15.00, 60.00, 10, 5, 10, 'imgs/dino.svg', 3, 'terrestre'),
('Caudipteryx', 0.60, 1.00, 7.00, 40.00, 9, 4, 5, 'imgs/dino.svg', 4, 'terrestre'),
('Bambirraptor', 0.40, 1.00, 2.50, 45.00, 10, 4, 2, 'imgs/dino.svg', 3, 'terrestre'),
('Dracovenator', 2.00, 6.00, 400.00, 35.00, 7, 3, 8, 'imgs/dino.svg', 3, 'terrestre'),
('Rajasaurus', 2.40, 8.00, 1500.00, 28.00, 5, 3, 6, 'imgs/dino.svg', 4, 'terrestre'),
('Shamosaurus', 1.50, 5.00, 2000.00, 10.00, 2, 10, 3, 'imgs/dino.svg', 2, 'terrestre'),
('Saurolofo', 4.00, 9.00, 2500.00, 30.00, 4, 3, 7, 'imgs/dino.svg', 4, 'terrestre'),
('Tyrannotitan', 4.00, 13.00, 7000.00, 30.00, 4, 4, 1, 'imgs/dino.svg', 4, 'terrestre'),
('Zuniceratops', 1.00, 3.50, 150.00, 30.00, 6, 3, 9, 'imgs/dino.svg', 3, 'terrestre'),
('Jobaria', 12.00, 18.00, 16000.00, 12.00, 2, 5, 4, 'imgs/dino.svg', 4, 'terrestre'),
('Huayangossauro', 1.80, 4.50, 1000.00, 15.00, 3, 6, 10, 'imgs/dino.svg', 3, 'terrestre'),
('Yinlong', 0.50, 1.20, 15.00, 25.00, 8, 4, 5, 'imgs/dino.svg', 2, 'terrestre');


-- gemini deck c
INSERT INTO DINO (NOME, ALTURA, COMPRIMENTO, PESO, VELOCIDADE, AGILIDADE, LONGEVIDADE, NUMERO_MAGICO, IMAGEM, FAMA, TIPO) VALUES
('Gorgossauro', 2.80, 8.50, 2500.00, 42.00, 6, 4, 7, 'imgs/dino.svg', 5, 'terrestre'),
('Giraffatitan', 13.00, 25.00, 30000.00, 12.00, 1, 5, 3, 'imgs/dino.svg', 6, 'terrestre'),
('Patagotitan', 15.00, 37.00, 70000.00, 10.00, 1, 4, 9, 'imgs/dino.svg', 7, 'terrestre'),
('Saturnália', 0.50, 1.50, 10.00, 40.00, 9, 5, 2, 'imgs/dino.svg', 4, 'terrestre'),
('Santanaraptor', 0.60, 1.30, 20.00, 45.00, 10, 3, 5, 'imgs/dino.svg', 4, 'terrestre'),
('Irritator', 2.50, 8.00, 1500.00, 30.00, 5, 6, 8, 'imgs/dino.svg', 5, 'terrestre'),
('Abelissauro', 2.50, 7.50, 1500.00, 32.00, 6, 10, 1, 'imgs/dino.svg', 4, 'terrestre'),
('Massospondylus', 1.50, 4.00, 1000.00, 22.00, 4, 15, 6, 'imgs/dino.svg', 3, 'terrestre'),
('Camptossauro', 2.00, 6.00, 800.00, 25.00, 5, 8, 10, 'imgs/dino.svg', 4, 'terrestre'),
('Dacentruro', 2.50, 7.00, 2000.00, 15.00, 3, 6, 4, 'imgs/dino.svg', 3, 'terrestre'),
('Einiossauro', 2.20, 4.50, 1300.00, 28.00, 4, 4, 7, 'imgs/dino.svg', 4, 'terrestre'),
('Elaphrossauro', 1.50, 6.00, 210.00, 55.00, 9, 7, 2, 'imgs/dino.svg', 3, 'terrestre'),
('Falcário', 1.20, 4.00, 100.00, 30.00, 7, 5, 8, 'imgs/dino.svg', 3, 'terrestre'),
('Gasossauro', 1.50, 4.00, 150.00, 35.00, 7, 8, 3, 'imgs/dino.svg', 2, 'terrestre'),
('Grypossauro', 3.50, 9.00, 3000.00, 28.00, 4, 5, 5, 'imgs/dino.svg', 3, 'terrestre'),
('Homalocefale', 0.60, 1.80, 45.00, 24.00, 6, 10, 1, 'imgs/dino.svg', 4, 'terrestre'),
('Kulindadromeus', 0.40, 1.50, 5.00, 35.00, 10, 6, 9, 'imgs/dino.svg', 4, 'terrestre'),
('Leptoceratops', 0.80, 2.00, 100.00, 25.00, 6, 3, 6, 'imgs/dino.svg', 3, 'terrestre'),
('Lesotossauro', 0.50, 2.00, 10.00, 40.00, 10, 11, 4, 'imgs/dino.svg', 3, 'terrestre'),
('Lourinhanossauro', 2.20, 4.50, 160.00, 38.00, 7, 5, 7, 'imgs/dino.svg', 3, 'terrestre'),
('Lusotitan', 12.00, 25.00, 30000.00, 10.00, 1, 5, 2, 'imgs/dino.svg', 3, 'terrestre'),
('Minmi', 0.80, 3.00, 300.00, 15.00, 4, 8, 8, 'imgs/dino.svg', 4, 'terrestre'),
('Nemegtossauro', 4.00, 12.00, 8000.00, 15.00, 2, 5, 10, 'imgs/dino.svg', 3, 'terrestre'),
('Neovenator', 2.50, 7.50, 1500.00, 38.00, 7, 5, 5, 'imgs/dino.svg', 4, 'terrestre'),
('Nodossauro', 1.50, 5.00, 2500.00, 12.00, 2, 6, 1, 'imgs/dino.svg', 4, 'terrestre'),
('Panfagia', 0.40, 1.30, 8.00, 40.00, 9, 4, 3, 'imgs/dino.svg', 3, 'terrestre'),
('Peloro-sauro', 10.00, 24.00, 25000.00, 12.00, 1, 10, 9, 'imgs/dino.svg', 2, 'terrestre'),
('Piatnitzkyssauro', 1.80, 4.50, 450.00, 35.00, 7, 8, 4, 'imgs/dino.svg', 3, 'terrestre'),
('Polacanto', 1.20, 5.00, 2000.00, 12.00, 2, 11, 6, 'imgs/dino.svg', 4, 'terrestre'),
('Rebbachissauro', 4.00, 14.00, 10000.00, 15.00, 2, 6, 7, 'imgs/dino.svg', 3, 'terrestre'),
('Rugops', 2.00, 6.00, 410.00, 25.00, 6, 4, 2, 'imgs/dino.svg', 4, 'terrestre'),
('Segnossauro', 3.00, 6.00, 1300.00, 20.00, 3, 5, 8, 'imgs/dino.svg', 3, 'terrestre'),
('Sinornitossauro', 0.50, 1.20, 3.00, 35.00, 10, 4, 5, 'imgs/dino.svg', 4, 'terrestre'),
('Skorpiovenator', 2.20, 6.00, 1200.00, 30.00, 6, 3, 10, 'imgs/dino.svg', 3, 'terrestre'),
('Telmatossauro', 2.00, 5.00, 600.00, 24.00, 5, 4, 1, 'imgs/dino.svg', 2, 'terrestre'),
('Tenontossauro', 2.50, 7.00, 1000.00, 28.00, 4, 7, 3, 'imgs/dino.svg', 4, 'terrestre'),
('Tethyshadros', 1.50, 4.00, 350.00, 32.00, 6, 2, 9, 'imgs/dino.svg', 3, 'terrestre'),
('Tecodontossauro', 0.50, 1.20, 11.00, 35.00, 9, 8, 4, 'imgs/dino.svg', 3, 'terrestre'),
('Titanossauro', 5.00, 12.00, 13000.00, 12.00, 2, 11, 6, 'imgs/dino.svg', 6, 'terrestre'),
('Udanoceratops', 1.50, 4.00, 700.00, 22.00, 4, 4, 7, 'imgs/dino.svg', 2, 'terrestre'),
('Vulcanodonte', 2.00, 6.50, 3500.00, 18.00, 3, 12, 2, 'imgs/dino.svg', 3, 'terrestre'),
('Wuerhossauro', 2.00, 7.00, 2000.00, 15.00, 3, 3, 8, 'imgs/dino.svg', 3, 'terrestre'),
('Zalmoxes', 1.20, 2.50, 350.00, 25.00, 6, 4, 5, 'imgs/dino.svg', 2, 'terrestre'),
('Aerosteon', 2.50, 9.00, 2000.00, 40.00, 7, 4, 10, 'imgs/dino.svg', 4, 'terrestre'),
('Ampelossauro', 4.00, 15.00, 8000.00, 12.00, 2, 7, 1, 'imgs/dino.svg', 3, 'terrestre'),
('Anquiornis', 0.30, 0.40, 0.20, 15.00, 9, 5, 3, 'imgs/dino.svg', 5, 'voador'),
('Brachylophossauro', 3.00, 9.00, 2000.00, 30.00, 4, 3, 9, 'imgs/dino.svg', 3, 'terrestre'),
('Chialingossauro', 1.50, 4.00, 500.00, 18.00, 4, 6, 4, 'imgs/dino.svg', 2, 'terrestre'),
('Deltadromeus', 2.50, 8.00, 1000.00, 48.00, 8, 5, 6, 'imgs/dino.svg', 4, 'terrestre'),
('Gorgonops', 1.00, 3.00, 300.00, 45.00, 8, 10, 7, 'imgs/dino.svg', 5, 'terrestre');

-- gemini deck de pterossauros
INSERT INTO DINO (NOME, ALTURA, COMPRIMENTO, PESO, VELOCIDADE, AGILIDADE, LONGEVIDADE, NUMERO_MAGICO, IMAGEM, FAMA, TIPO) VALUES
('Quetzalcoatlo', 4.80, 11.00, 250.00, 100.00, 3, 2, 7, 'imgs/dino.svg', 10, 'voador'),
('Pteranodonte', 1.80, 7.00, 35.00, 60.00, 6, 4, 3, 'imgs/dino.svg', 10, 'voador'),
('Pterodáctilo', 0.50, 1.00, 2.00, 45.00, 9, 3, 9, 'imgs/dino.svg', 10, 'voador'),
('Dimorfodonte', 0.60, 1.50, 2.00, 50.00, 8, 5, 5, 'imgs/dino.svg', 8, 'voador'),
('Tupandáctilo', 2.00, 5.00, 40.00, 55.00, 7, 4, 2, 'imgs/dino.svg', 7, 'voador'),
('Anhanguera', 1.50, 4.50, 30.00, 65.00, 7, 6, 8, 'imgs/dino.svg', 6, 'voador'),
('Tapejara', 1.20, 3.50, 20.00, 50.00, 8, 4, 1, 'imgs/dino.svg', 7, 'voador'),
('Ranforrinco', 0.30, 1.80, 2.00, 40.00, 9, 11, 10, 'imgs/dino.svg', 7, 'voador'),
('Hatzegopterix', 4.50, 10.50, 220.00, 90.00, 3, 2, 4, 'imgs/dino.svg', 6, 'voador'),
('Cearadáctilo', 1.50, 5.50, 35.00, 60.00, 6, 5, 6, 'imgs/dino.svg', 5, 'voador'),
('Nictossauro', 0.80, 3.00, 5.00, 55.00, 8, 3, 7, 'imgs/dino.svg', 6, 'voador'),
('Dsungaríptero', 1.20, 3.00, 15.00, 50.00, 6, 12, 5, 'imgs/dino.svg', 4, 'voador'),
('Tropeognato', 1.60, 8.00, 50.00, 70.00, 5, 4, 2, 'imgs/dino.svg', 5, 'voador'),
('Talassodromo', 1.80, 4.50, 30.00, 60.00, 7, 5, 8, 'imgs/dino.svg', 4, 'voador'),
('Tupuxuara', 2.00, 5.50, 40.00, 55.00, 6, 4, 1, 'imgs/dino.svg', 5, 'voador'),
('Arambourgiania', 4.00, 10.00, 200.00, 85.00, 3, 3, 9, 'imgs/dino.svg', 4, 'voador'),
('Criodracon', 3.50, 9.00, 180.00, 80.00, 4, 4, 3, 'imgs/dino.svg', 4, 'voador'),
('Ornitiqueiro', 1.50, 6.00, 40.00, 65.00, 6, 15, 7, 'imgs/dino.svg', 5, 'voador'),
('Sordes', 0.20, 0.60, 0.50, 35.00, 10, 5, 6, 'imgs/dino.svg', 3, 'voador'),
('Anurognato', 0.10, 0.40, 0.10, 40.00, 10, 4, 5, 'imgs/dino.svg', 5, 'voador'),
('Darwinóptero', 0.40, 1.00, 1.50, 45.00, 9, 5, 2, 'imgs/dino.svg', 4, 'voador'),
('Scaphognato', 0.50, 1.00, 2.00, 40.00, 8, 6, 8, 'imgs/dino.svg', 3, 'voador'),
('Eudimorfodonte', 0.40, 1.00, 1.50, 42.00, 9, 8, 4, 'imgs/dino.svg', 4, 'voador'),
('Peteinossauro', 0.20, 0.60, 0.30, 38.00, 10, 5, 1, 'imgs/dino.svg', 3, 'voador'),
('Coloborrinco', 1.40, 6.00, 35.00, 60.00, 6, 10, 10, 'imgs/dino.svg', 3, 'voador'),
('Istiodáctilo', 1.20, 4.50, 25.00, 55.00, 7, 5, 3, 'imgs/dino.svg', 3, 'voador'),
('Sinóptero', 0.60, 1.20, 3.00, 45.00, 8, 5, 7, 'imgs/dino.svg', 3, 'voador'),
('Caiuajara', 1.00, 2.30, 10.00, 48.00, 8, 5, 9, 'imgs/dino.svg', 4, 'voador'),
('Alanqa', 2.00, 6.00, 40.00, 70.00, 5, 3, 6, 'imgs/dino.svg', 3, 'voador'),
('Zhejiangóptero', 1.50, 3.50, 20.00, 55.00, 7, 4, 4, 'imgs/dino.svg', 3, 'voador'),
('Aerotitã', 3.00, 9.00, 150.00, 75.00, 4, 2, 8, 'imgs/dino.svg', 3, 'voador'),
('Gnathosaurus', 0.60, 1.70, 4.00, 42.00, 7, 5, 2, 'imgs/dino.svg', 2, 'voador'),
('Austriadáctilo', 0.40, 1.20, 2.00, 40.00, 8, 4, 5, 'imgs/dino.svg', 2, 'voador'),
('Caviramus', 0.50, 1.30, 2.50, 42.00, 8, 4, 1, 'imgs/dino.svg', 2, 'voador'),
('Jeoloptero', 0.15, 0.80, 0.40, 45.00, 10, 4, 10, 'imgs/dino.svg', 4, 'voador'),
('Noríptero', 1.00, 2.50, 10.00, 48.00, 7, 6, 3, 'imgs/dino.svg', 2, 'voador'),
('Hamíptero', 1.20, 3.50, 20.00, 52.00, 7, 5, 7, 'imgs/dino.svg', 3, 'voador'),
('Guidraco', 1.00, 4.00, 25.00, 58.00, 7, 5, 8, 'imgs/dino.svg', 3, 'voador'),
('Lacusovagus', 1.50, 5.00, 30.00, 60.00, 6, 4, 9, 'imgs/dino.svg', 2, 'voador'),
('Muzquizóptero', 0.40, 2.00, 5.00, 45.00, 8, 3, 4, 'imgs/dino.svg', 2, 'voador'),
('Vectidraco', 0.30, 0.70, 1.00, 40.00, 9, 5, 6, 'imgs/dino.svg', 2, 'voador'),
('Araripessauro', 0.80, 3.00, 10.00, 50.00, 8, 6, 2, 'imgs/dino.svg', 3, 'voador'),
('Preondáctilo', 0.30, 0.50, 0.40, 38.00, 10, 5, 5, 'imgs/dino.svg', 3, 'voador'),
('Eurolimnornes', 0.50, 1.00, 2.00, 42.00, 8, 4, 1, 'imgs/dino.svg', 2, 'voador'),
('Pterodaustro', 0.80, 2.50, 10.00, 45.00, 7, 10, 10, 'imgs/dino.svg', 5, 'voador'),
('Eurazhdarcho', 1.50, 3.00, 20.00, 55.00, 7, 4, 3, 'imgs/dino.svg', 2, 'voador'),
('Moganopterus', 1.20, 7.00, 45.00, 65.00, 5, 5, 7, 'imgs/dino.svg', 3, 'voador'),
('Kepodactylus', 1.00, 2.50, 12.00, 50.00, 8, 6, 8, 'imgs/dino.svg', 2, 'voador'),
('Geresgraphia', 0.40, 1.00, 1.50, 40.00, 9, 3, 4, 'imgs/dino.svg', 2, 'voador'),
('Iberodactylus', 1.40, 4.00, 25.00, 58.00, 6, 5, 6, 'imgs/dino.svg', 2, 'voador');


-- gemini deck de répteis marinhos
INSERT INTO DINO (NOME, ALTURA, COMPRIMENTO, PESO, VELOCIDADE, AGILIDADE, LONGEVIDADE, NUMERO_MAGICO, IMAGEM, FAMA, TIPO) VALUES
('Mosassauro', 2.50, 17.00, 15000.00, 50.00, 6, 4, 8, 'imgs/dino.svg', 10, 'aquatico'),
('Plesiossauro', 1.20, 3.50, 450.00, 15.00, 8, 15, 2, 'imgs/dino.svg', 10, 'aquatico'),
('Ictiossauro', 0.80, 2.00, 90.00, 40.00, 9, 10, 5, 'imgs/dino.svg', 9, 'aquatico'),
('Liopleurodon', 2.00, 7.00, 3000.00, 35.00, 5, 5, 7, 'imgs/dino.svg', 9, 'aquatico'),
('Elasmossauro', 2.00, 14.00, 2000.00, 20.00, 4, 5, 1, 'imgs/dino.svg', 9, 'aquatico'),
('Tylossauro', 2.20, 13.00, 8000.00, 45.00, 6, 6, 9, 'imgs/dino.svg', 8, 'aquatico'),
('Basilosauro', 1.50, 18.00, 6000.00, 30.00, 4, 5, 3, 'imgs/dino.svg', 7, 'aquatico'),
('Kronossauro', 2.50, 10.00, 7000.00, 40.00, 5, 15, 6, 'imgs/dino.svg', 8, 'aquatico'),
('Shonissauro', 4.50, 21.00, 30000.00, 25.00, 2, 10, 4, 'imgs/dino.svg', 7, 'aquatico'),
('Pliossauro', 2.20, 12.00, 9000.00, 38.00, 5, 8, 10, 'imgs/dino.svg', 8, 'aquatico'),
('Nothossauro', 0.60, 4.00, 150.00, 25.00, 7, 12, 8, 'imgs/dino.svg', 6, 'aquatico'),
('Archelon', 1.00, 4.00, 2200.00, 10.00, 3, 10, 2, 'imgs/dino.svg', 8, 'aquatico'),
('Dakossauro', 0.80, 4.50, 350.00, 30.00, 7, 5, 5, 'imgs/dino.svg', 5, 'aquatico'),
('Metriorrinco', 0.50, 3.00, 200.00, 35.00, 8, 8, 7, 'imgs/dino.svg', 5, 'aquatico'),
('Placodonte', 0.40, 2.00, 100.00, 12.00, 4, 13, 1, 'imgs/dino.svg', 4, 'aquatico'),
('Cimoliassauro', 1.00, 5.00, 800.00, 18.00, 6, 5, 9, 'imgs/dino.svg', 4, 'aquatico'),
('Dolichorhynchops', 0.60, 3.00, 100.00, 40.00, 9, 4, 3, 'imgs/dino.svg', 5, 'aquatico'),
('Globidens', 1.20, 6.00, 2000.00, 35.00, 6, 4, 6, 'imgs/dino.svg', 4, 'aquatico'),
('Hainossauro', 2.00, 12.50, 7000.00, 42.00, 6, 5, 10, 'imgs/dino.svg', 5, 'aquatico'),
('Macroplata', 0.80, 4.50, 400.00, 22.00, 7, 10, 4, 'imgs/dino.svg', 4, 'aquatico'),
('Stenopterygius', 0.60, 3.00, 120.00, 45.00, 9, 8, 8, 'imgs/dino.svg', 4, 'aquatico'),
('Tanystropheus', 0.50, 6.00, 150.00, 15.00, 5, 12, 2, 'imgs/dino.svg', 7, 'aquatico'),
('Tethysaurus', 0.40, 3.00, 80.00, 35.00, 8, 3, 5, 'imgs/dino.svg', 3, 'aquatico'),
('Umoassauro', 0.50, 2.50, 70.00, 30.00, 8, 5, 7, 'imgs/dino.svg', 3, 'aquatico'),
('Mauisaurus', 1.80, 13.00, 1800.00, 20.00, 4, 3, 1, 'imgs/dino.svg', 4, 'aquatico'),
('Cryptoclidus', 1.00, 4.00, 500.00, 22.00, 7, 5, 9, 'imgs/dino.svg', 5, 'aquatico'),
('Polycotylus', 0.80, 5.00, 600.00, 38.00, 8, 4, 3, 'imgs/dino.svg', 3, 'aquatico'),
('Shastasaurus', 4.00, 21.00, 25000.00, 22.00, 2, 11, 6, 'imgs/dino.svg', 5, 'aquatico'),
('Cymbospondylus', 1.50, 10.00, 4000.00, 30.00, 5, 15, 10, 'imgs/dino.svg', 4, 'aquatico'),
('Clidastes', 0.80, 4.00, 250.00, 45.00, 8, 5, 4, 'imgs/dino.svg', 3, 'aquatico'),
('Brachauchenius', 2.00, 9.00, 5000.00, 35.00, 5, 5, 8, 'imgs/dino.svg', 3, 'aquatico'),
('Muraenossauro', 1.20, 6.00, 1000.00, 18.00, 5, 8, 2, 'imgs/dino.svg', 4, 'aquatico'),
('Platecarpus', 1.00, 4.50, 500.00, 40.00, 8, 4, 5, 'imgs/dino.svg', 4, 'aquatico'),
('Eromangassauro', 1.00, 7.00, 1200.00, 20.00, 5, 3, 1, 'imgs/dino.svg', 3, 'aquatico'),
('Simolestes', 1.80, 6.00, 2500.00, 32.00, 6, 6, 7, 'imgs/dino.svg', 3, 'aquatico'),
('Temnodontossauro', 2.00, 10.00, 5000.00, 35.00, 5, 12, 9, 'imgs/dino.svg', 4, 'aquatico'),
('Eurhinosaurus', 0.50, 6.00, 300.00, 48.00, 8, 8, 3, 'imgs/dino.svg', 4, 'aquatico'),
('Peloneustes', 0.60, 3.00, 200.00, 35.00, 8, 5, 6, 'imgs/dino.svg', 3, 'aquatico'),
('Trinacromerum', 0.70, 3.00, 150.00, 45.00, 9, 4, 10, 'imgs/dino.svg', 3, 'aquatico'),
('Aristonectes', 1.50, 10.00, 2000.00, 15.00, 4, 5, 4, 'imgs/dino.svg', 3, 'aquatico'),
('Angolassauro', 0.80, 4.00, 300.00, 38.00, 7, 4, 2, 'imgs/dino.svg', 3, 'aquatico'),
('Kaiwhekea', 1.20, 7.00, 1000.00, 22.00, 6, 3, 5, 'imgs/dino.svg', 3, 'aquatico'),
('Mixossauro', 0.30, 1.00, 10.00, 30.00, 10, 12, 1, 'imgs/dino.svg', 4, 'aquatico'),
('Ophthalmosaurus', 1.20, 6.00, 1500.00, 45.00, 8, 5, 8, 'imgs/dino.svg', 5, 'aquatico'),
('Plesiotylosaurus', 1.80, 11.00, 6000.00, 35.00, 5, 4, 3, 'imgs/dino.svg', 3, 'aquatico'),
('Rhomaleossauro', 1.50, 7.00, 2000.00, 30.00, 6, 10, 7, 'imgs/dino.svg', 4, 'aquatico'),
('Pistossauro', 0.50, 3.00, 150.00, 25.00, 7, 8, 9, 'imgs/dino.svg', 2, 'aquatico'),
('Henodus', 0.30, 1.00, 40.00, 10.00, 4, 5, 6, 'imgs/dino.svg', 3, 'aquatico'),
('Sinosaurosphargis', 0.20, 1.10, 30.00, 15.00, 5, 4, 10, 'imgs/dino.svg', 2, 'aquatico'),
('Eretmossauro', 0.80, 4.00, 400.00, 20.00, 6, 5, 4, 'imgs/dino.svg', 2, 'aquatico');
