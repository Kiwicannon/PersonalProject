DROP TABLE IF EXISTS sunglasses, gender;

/*~~~~~~~~~~~~~~~~~~~*
    Gender Table
*~~~~~~~~~~~~~~~~~~~~*/
CREATE TABLE gender (
    id SERIAL PRIMARY KEY,
    gendertype VARCHAR(255)
);

INSERT INTO gender (gendertype) VALUES
('Men''s'),
('Unisex');

/*~~~~~~~~~~~~~~~~~~~*
    Sunglasses Table
*~~~~~~~~~~~~~~~~~~~~*/
CREATE TABLE sunglasses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    photo1front VARCHAR(255),
    photo1side VARCHAR(255),
    framecolor VARCHAR(255),
    lenscolor VARCHAR(255),
    shape VARCHAR(255),
    width VARCHAR(255),
    price Money,
    genderid INTEGER REFERENCES gender(id)
);

INSERT INTO sunglasses (name, photo1front,photo1side, framecolor, lenscolor, shape, width, price, genderid) VALUES 
('Hyde', '/assets/Sunglasses-imgs/Hyde_-_Crystal_Mirror_Front_large.jpg','/assets/Sunglasses-imgs/Hyde-CrystalMirror-Angle_large.jpg', 'black', 'green', 'round', 'medium', 70.00, 2),
('Hyde - Polarized', '/assets/Sunglasses-imgs/Hyde_-_Crystal_Mirror_Front_large.jpg','/assets/Sunglasses-imgs/Hyde-CrystalMirror-Angle_large.jpg', 'black', 'green', 'round', 'medium', 90.00, 2),
('Reveler', '/assets/Sunglasses-imgs/Reveler_-_Amber_Tortoise_large.jpg', '/assets/Sunglasses-imgs/Reveler-AmberTortoise-Angle_large.jpg', 'tortoise', 'brown', 'rectangle', 'wide', 70.00, 1),
('Reveler - Polarized', '/assets/Sunglasses-imgs/Reveler_-_Amber_Tortoise_large.jpg','/assets/Sunglasses-imgs/Reveler-AmberTortoise-Angle_large.jpg', 'tortoise', 'brown', 'rectangle', 'wide', 90.00, 1),
('Legend', '/assets/Sunglasses-imgs/Legend_-_Matte_Black_large.jpg','/assets/Sunglasses-imgs/Legend-MatteBlack-Angle_large.jpg', 'black', 'brown', 'round', 'medium', 70.00, 2),
('Legend - Polarized', '/assets/Sunglasses-imgs/Legend_-_Matte_Black_large.jpg','/assets/Sunglasses-imgs/Legend-MatteBlack-Angle_large.jpg', 'black', 'brown', 'round', 'medium', 90.00, 2),
('Runaway', '/assets/Sunglasses-imgs/Runaway_-_Matte_Black_large.jpg','/assets/Sunglasses-imgs/Runaway-MatteBlack-Angle_large.jpg', 'black', 'mirror', 'aviator', 'medium', 70.00, 2),
('Runaway - Polarized', '/assets/Sunglasses-imgs/Runaway_-_Matte_Black_large.jpg','/assets/Sunglasses-imgs/Runaway-MatteBlack-Angle_large.jpg',  'black', 'mirror', 'aviator', 'medium', 90.00, 2),
('Outsider', '/assets/Sunglasses-imgs/Outsider_-_Pure_Black_Front_large.jpg', '/assets/Sunglasses-imgs/Outsider-PureBlack-Angle_large.jpg', 'black', 'green', 'rectangle', 'medium', 70.00, 2),
('Outsider - Polarized', '/assets/Sunglasses-imgs/Outsider_-_Pure_Black_Front_large.jpg','/assets/Sunglasses-imgs/Outsider-PureBlack-Angle_large.jpg', 'black', 'green', 'rectangle', 'medium', 90.00, 2),
('Rio', '/assets/Sunglasses-imgs/Rio_-_Burnt_Honey_Tortoise_Front_large.jpg','/assets/Sunglasses-imgs/RioBurntHoneyTortoise-Angle_large.jpg', 'tortoise', 'green', 'round', 'medium', 70.00, 2),
('Rio - Polarized', '/assets/Sunglasses-imgs/Rio_-_Burnt_Honey_Tortoise_Front_large.jpg','/assets/Sunglasses-imgs/RioBurntHoneyTortoise-Angle_large.jpg', 'tortoise', 'green', 'round', 'medium', 90.00, 2);