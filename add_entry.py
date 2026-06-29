#!/usr/bin/env python3
"""
Script senzill per afegir entrades a promptsIA.md i respostesIA.md

Usatge d'exemple:
  python add_entry.py --kind prompt --text "Nou prompt d'exemple"
  python add_entry.py --kind response --text "Resposta generada per l'assistent"

Aquest script afegeix una marca temporal ISO 8601 a l'entrada.
"""
import argparse
import datetime
import os
import re


def iso_now():
    return datetime.datetime.utcnow().replace(microsecond=0).isoformat() + 'Z'


def next_number_for_prompts(path):
    if not os.path.exists(path):
        return 1
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    matches = re.findall(r'^##\s*(\d+)\)', text, flags=re.MULTILINE)
    nums = [int(m) for m in matches] if matches else []
    return max(nums) + 1 if nums else 1


def next_number_for_responses(path):
    if not os.path.exists(path):
        return 1
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    matches = re.findall(r'^##\s*Resposta\s*(\d+)', text, flags=re.MULTILINE)
    nums = [int(m) for m in matches] if matches else []
    return max(nums) + 1 if nums else 1


def append_prompt(path, text):
    n = next_number_for_prompts(path)
    entry = f"## {n}) {text}\n**Marca temporal:** {iso_now()}\n\n"
    with open(path, 'a', encoding='utf-8') as f:
        f.write(entry)


def append_response(path, text):
    n = next_number_for_responses(path)
    entry = f"## Resposta {n} (automàtic)\n{text}\n\n**Marca temporal (resposta):** {iso_now()}\n\n"
    with open(path, 'a', encoding='utf-8') as f:
        f.write(entry)


def main():
    parser = argparse.ArgumentParser(description='Afegir prompt o resposta als fitxers md del projecte')
    parser.add_argument('--kind', choices=['prompt', 'response'], required=True, help='Tipus d\'entrada')
    parser.add_argument('--text', required=True, help='Text de l\'entrada')
    parser.add_argument('--project-dir', default='.', help='Carpeta del projecte on estan els fitxers md')
    args = parser.parse_args()

    prompts_path = os.path.join(args.project_dir, 'promptsIA.md')
    responses_path = os.path.join(args.project_dir, 'respostesIA.md')

    if args.kind == 'prompt':
        append_prompt(prompts_path, args.text)
        print(f"Afegit prompt a {prompts_path}")
    else:
        append_response(responses_path, args.text)
        print(f"Afegida resposta a {responses_path}")


if __name__ == '__main__':
    main()
