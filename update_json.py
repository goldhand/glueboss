import csv
import json
import sys


def main(argv):
    '''
    usage:
    $ python update_json.py <glueboss-data.csv> <glueboss-data.json>
    '''
    csv_destination = argv[0] if argv else 'glueboss-data.csv'
    json_destination = argv[1] if len(argv) == 2 else 'glueboss-data.json'

    fieldnames = ("manufacturer_name", "manufacturer_color", "manufacturer_number",
                  "glueboss_color", "glueboss_number", "volusion_id",
                  "transparency", "red", "green", "blue", "transparency_rating",
                  "text_color")
    csvfile = open(csv_destination, 'r')
    jsonfile = open(json_destination, 'w')
    reader = csv.DictReader(csvfile, fieldnames)
    rows = [row for row in reader]
    # delete the top row
    del rows[0]
    out = json.dumps(rows)
    jsonfile.write(out)
    jsonfile.close()
    csvfile.close()

if __name__ == '__main__':
    print '\n\n'
    print 'Copying Data from {}'.format(
                    sys.argv[1] if len(sys.argv)>1 else 'glueboss-data.csv')
    print '\n\n...\n...\n\n'
    main(sys.argv[1:])
    print 'Data saved to {}'.format(
                    sys.argv[2] if len(sys.argv)>2 else 'glueboss-data.json')
    print '\n...\n100% COMPLETED\nMAINFRAME DESTRUCTION IMMINENT\n...\n'
