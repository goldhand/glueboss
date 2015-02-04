import csv, json
fieldnames = ("label", "manufacturer", "color", "number", "glueboss_color", "new_number")
csvfile=open('../resources/vendor-colors.csv', 'r')
jsonfile=open('resources/vendor-colors.json', 'w')
reader = csv.DictReader(csvfile, fieldnames)
out = json.dumps([row for row in reader])
jsonfile.write(out)
jsonfile.close()
csvfile.close()