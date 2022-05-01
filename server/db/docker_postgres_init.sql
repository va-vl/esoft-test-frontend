CREATE TABLE IF NOT EXISTS Apartment(
   id           INTEGER  NOT NULL PRIMARY KEY 
  ,floor        INTEGER  NOT NULL
  ,pos_on_floor INTEGER  NOT NULL
  ,price        REAL  NOT NULL
  ,rooms        INTEGER  NOT NULL
  ,area_total   REAL  NOT NULL
  ,area_kitchen REAL NOT NULL
  ,area_live    REAL NOT NULL
  ,layout_image VARCHAR NOT NULL
);

INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (101,1,1,2880000,1,33.5,11.4,14.5,'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (102,1,2,5050000,2,64.8,19.2,33,'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (103,1,3,3030000,1,36.5,11.7,17.4,'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (104,1,4,3000000,1,35.8,15,11.2,'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (105,1,5,5200000,2,66.6,18.5,29.4,'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (106,1,6,6050000,3,85.3,16.6,46.6,'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (107,2,1,2880000,1,33.5,11.4,14.5,'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (108,2,2,5050000,2,64.8,19.2,33,'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (109,2,3,3030000,1,36.5,11.7,17.4,'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (110,2,4,3000000,1,35.8,15,11.2,'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png')  ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (111,2,5,5200000,2,66.6,18.5,29.4,'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (112,2,6,6050000,3,85.3,16.6,46.6,'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (113,3,1,2880000,1,33.5,11.4,14.5,'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (114,3,2,5050000,2,64.8,19.2,33,'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (115,3,3,3030000,1,36.5,11.7,17.4,'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (116,3,4,3000000,1,35.8,15,11.2,'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (117,3,5,5200000,2,66.6,18.5,29.4,'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (118,3,6,6050000,3,85.3,16.6,46.6,'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (119,4,1,2880000,1,33.5,11.4,14.5,'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (120,4,2,5050000,2,64.8,19.2,33,'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (121,4,3,3030000,1,36.5,11.7,17.4,'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (122,4,4,3000000,1,35.8,15,11.2,'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (123,4,5,5200000,2,66.6,18.5,29.4,'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png') ON CONFLICT DO NOTHING;
INSERT INTO Apartment(id,floor,pos_on_floor,price,rooms,area_total,area_kitchen,area_live,layout_image) VALUES (124,4,6,6050000,3,85.3,16.6,46.6,'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png') ON CONFLICT DO NOTHING;
