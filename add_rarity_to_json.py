import argparse
import json
import os
import re

def extractTraitDict(traitset:str):
    vals = traitset.replace('}', '').replace('\'', '').split(',')
    temp = {}
    for i in vals:
        kv = i.split(':')
        temp[kv[0].strip()] = kv[1].strip()
    traitname = temp['trait']
    if traitname:
        temp.pop('trait')
    return (traitname, temp)


def addRarityToJson(jsond, raritydict):
    for idx,a in enumerate(jsond['attributes']):
        tt = a['trait_type']
        if tt in raritydict and raritydict[tt] and a['value'] in raritydict[tt]:
            jsond['attributes'][idx]['weight'] = raritydict[tt][a['value']]['weight']
            jsond['attributes'][idx]['occurrence'] = raritydict[tt][a['value']]['occurrence']
    return jsond


def main():
    parser = argparse.ArgumentParser('drawing thingie')
    parser.add_argument(
        '--jsondir',
        dest='jsondir',
        default='./build/json',
        help='Directory where the json files are located')
    parser.add_argument(
        '--rarityfile',
        dest='rarityfile',
        default='filename',
        help='File with the output of rarity run')
    args = parser.parse_args()

    rarityDict = {}
    try:
      with open(args.rarityfile, "rt") as rarityfile:
          raw = rarityfile.read()
    except:
      with open(args.rarityfile, "rb") as rarityfile:
          raw = str(rarityfile.read().decode('utf-16le', 'ignore'))

    traitTypes = raw.split('Trait type')
    traitTypes.pop(0)
    for traitType in traitTypes:
        traitType = traitType[2:]
        traitType = traitType.replace('\n','')
        traitType = traitType.replace('\r','')
        print(traitType)
        s = traitType.split('{')
        name = s[0]
        s.pop(0)
        traits = {}
        for line in s:
            traitname, trait = extractTraitDict(line)
            if traitname:
                traits[traitname] = trait

        rarityDict[name] = traits


    for filename in os.listdir(args.jsondir):
        if filename.startswith('_'):
            continue
        with open(args.jsondir + '/' + filename, "rt") as file:
            jsond = json.load(file)
            jsond = addRarityToJson(jsond, rarityDict)
            splitfile = filename.split('.')
            outfilename = splitfile[0] + '_out.' + splitfile[1]
            with open(args.jsondir + '/' + outfilename, 'wt') as outfile:
                json.dump(jsond, outfile, indent=4)


if __name__ == "__main__":
    main()

