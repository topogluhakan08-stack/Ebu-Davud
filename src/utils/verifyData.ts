import { DATA } from '../data/data';

export interface VerificationResult {
  total: number;
  matchedCount: number;
  missing: string[];
  allNames: string[];
}

export function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * DATA içindeki bütün name/ad/title ve eser/çalışma/şahıs metinlerini toplar.
 * Tekrarsız liste döndürür.
 */
export function collectVerifiableNames(data: typeof DATA = DATA): string[] {
  const set = new Set<string>();

  const add = (val?: string) => {
    if (!val) return;
    const cleaned = val.trim();
    if (cleaned.length > 0) {
      set.add(cleaned);
    }
  };

  // Kapak
  add(data.cover.title);
  add(data.cover.fullName);

  // Harita şehirleri & hocaları
  for (const city of data.map.cities) {
    add(city.name);
    for (const teacher of city.teachers) {
      add(teacher.name);
    }
  }

  // Şehri belirtilmeyen hocalar + kaynak risale
  for (const t of data.teachers.unlocatedTeachers) {
    add(t.name);
  }
  add(data.teachers.sourceWorkTitle);

  // Talebeler
  for (const group of data.students.groups) {
    for (const student of group.students) {
      add(student.name);
    }
  }
  for (const name of data.students.goldBox.names) {
    add(name);
  }

  // Övgüler
  for (const praise of data.praises.items) {
    add(praise.name);
  }
  for (const extra of data.praises.extraAuthorsAndWorks) {
    add(extra);
  }

  // Hadisçiliği ve fıkhî konumda geçen kaynak/şahıslar
  for (const ref of data.methodology.referencedPeopleAndBooks) {
    add(ref);
  }

  // Eserler
  for (const work of data.works.mainWorks) {
    add(work.title);
    if (work.altTitle) {
      // altTitle içinde "adıyla da bilinir" gibi ek ifadeler hariç asıl adlar:
      if (work.number === 7) {
        add("Tesmiyetü'l-ihve min ehli'l-emsâr");
      } else {
        add(work.altTitle);
      }
    }
  }
  for (const other of data.works.otherWorks) {
    add(other.title);
  }
  for (const extraTitle of data.works.extraTitles) {
    add(extraTitle);
  }

  // Hakkında yapılan çalışmalar
  for (const study of data.studies.items) {
    add(study.author);
    add(study.title);
  }

  // Diğer şahıslar
  for (const person of data.otherPeople.names) {
    add(person);
  }
  for (const familyPerson of data.otherPeople.familyAndEarlier) {
    add(familyPerson);
  }

  return Array.from(set);
}

export function verifyRenderedNames(
  names: string[],
  bodyText: string
): VerificationResult {
  const normalizedBody = normalizeWhitespace(bodyText);
  const missing: string[] = [];

  for (const name of names) {
    const normalizedName = normalizeWhitespace(name);
    if (!normalizedBody.includes(normalizedName)) {
      missing.push(name);
    }
  }

  return {
    total: names.length,
    matchedCount: names.length - missing.length,
    missing,
    allNames: names,
  };
}
