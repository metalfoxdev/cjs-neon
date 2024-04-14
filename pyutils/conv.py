from bs4 import BeautifulSoup
import os
import json

with open("index copy.html", "r") as f:
    doc = f.read()

glist = []
soup = BeautifulSoup(doc, "html.parser")

container = soup.find("div", attrs={"class": "container"})
row = soup.find("div", attrs={"class": "row row-cols-3"})
text_array = row.find_all("p")
a_array = row.find_all("a")
img_array = row.find_all("img")


for i, item in enumerate(text_array):

    glist.append({"name": item.text, "img": img_array[i].get("src"), "url": a_array[i].get("href")})

with open("index.json", "w") as f:

    f.write(json.dumps(glist, indent=4))
