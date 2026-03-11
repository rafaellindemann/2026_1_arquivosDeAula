

```
CREATE TABLE IF NOT EXISTS DINO (
	CODIGO SERIAL PRIMARY KEY,
	NOME VARCHAR(150) NOT NULL UNIQUE,
	ALTURA DECIMAL(10, 2) NOT NULL,
	COMPRIMENTO DECIMAL(10, 2) NOT NULL,
	PESO DECIMAL(10, 2) NOT NULL,
	VELOCIDADE DECIMAL(10, 2) NOT NULL,
	AGILIDADE SMALLINT NOT NULL,
	LONGEVIDADE INT NOT NULL,
	NUMERO_MAGICO SMALLINT,
	IMAGEM VARCHAR(512)
);

```


```
INSERT INTO DINO (NOME, ALTURA, COMPRIMENTO, PESO, VELOCIDADE, AGILIDADE, LONGEVIDADE, NUMERO_MAGICO, IMAGEM) VALUES
('Tyrannosaurus rex', 3.66, 12.30, 6000.00, 32.00, 4, 45, NULL, 'https://en.wikipedia.org/wiki/Tyrannosaurus_rex'),
('Velociraptor mongoliensis', 0.50, 1.80, 18.00, 40.00, 9, 15, NULL, 'https://en.wikipedia.org/wiki/Velociraptor'),
('Brachiosaurus altithorax', 12.00, 23.00, 60000.00, 17.60, 2, 100, NULL, 'https://en.wikipedia.org/wiki/Brachiosaurus'),
('Triceratops horridus', 3.00, 9.00, 6000.00, 35.00, 5, 60, NULL, 'https://en.wikipedia.org/wiki/Triceratops'),
('Stegosaurus stenops', 3.00, 6.50, 2000.00, 15.30, 3, 30, NULL, 'https://en.wikipedia.org/wiki/Stegosaurus');

Lucas Fonseca
14:15
CREATE TABLE IF NOT EXISTS DINO (
	CODIGO SERIAL PRIMARY KEY,
	NOME VARCHAR(150) NOT NULL UNIQUE,
	ALTURA DECIMAL(10, 2) NOT NULL,
	COMPRIMENTO DECIMAL(10, 2) NOT NULL,
	PESO DECIMAL(10, 2) NOT NULL,
	VELOCIDADE DECIMAL(10, 2) NOT NULL,
	AGILIDADE SMALLINT NOT NULL,
	LONGEVIDADE INT NOT NULL,
	NUMERO_MAGICO SMALLINT,
	IMAGEM VARCHAR(512)
);

INSERT INTO DINO (NOME, ALTURA, COMPRIMENTO, PESO, VELOCIDADE, AGILIDADE, LONGEVIDADE, NUMERO_MAGICO, IMAGEM) VALUES
('Tyrannosaurus rex', 3.66, 12.30, 6000.00, 32.00, 4, 45, NULL, 'https://en.wikipedia.org/wiki/Tyrannosaurus_rex'),
('Velociraptor mongoliensis', 0.50, 1.80, 18.00, 40.00, 9, 15, NULL, 'https://en.wikipedia.org/wiki/Velociraptor'),
('Brachiosaurus altithorax', 12.00, 23.00, 60000.00, 17.60, 2, 100, NULL, 'https://en.wikipedia.org/wiki/Brachiosaurus'),
('Triceratops horridus', 3.00, 9.00, 6000.00, 35.00, 5, 60, NULL, 'https://en.wikipedia.org/wiki/Triceratops'),
('Stegosaurus stenops', 3.00, 6.50, 2000.00, 15.30, 3, 30, NULL, 'https://en.wikipedia.org/wiki/Stegosaurus');

SELECT * FROM DINO;
Para fixar uma mensagem, passe o cursor sobre ela
```



