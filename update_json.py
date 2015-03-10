import csv, json

fieldnames = ("manufacturer_name", "manufacturer_color", "manufacturer_number", 
              "glueboss_color", "glueboss_number", "volusion_id", 
              "transparency", "red", "green", "blue", "transparency_rating",
              "text_color")
csvfile=open('resources/glueboss-data-3-10.csv', 'r')
jsonfile=open('resources/glueboss-data.json', 'w')
reader = csv.DictReader(csvfile, fieldnames)
rows = [row for row in reader]
del rows[0] # delete the top row
out = json.dumps(rows)
jsonfile.write(out)
jsonfile.close()
csvfile.close()
