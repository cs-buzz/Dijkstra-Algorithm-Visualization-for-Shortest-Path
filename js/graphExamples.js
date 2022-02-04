const EXAMPLE_GRAPHS = [
  {
    nodes: [
      {
        id: 0,
        label: 'A',
        x: 3,
        y: 7
      },
      {
        id: 1,
        label: 'B',
        x: 6,
        y: 3
      },
      {
        id: 2,
        label: 'C',
        x: 9,
        y: 3
      },
      {
        id: 3,
        label: 'D',
        x: 13,
        y: 3
      },
      {
        id: 4,
        label: 'E',
        x: 16,
        y: 7
      },
      {
        id: 5,
        label: 'F',
        x: 13,
        y: 11
      },
      {
        id: 6,
        label: 'G',
        x: 9,
        y: 11
      },
      {
        id: 7,
        label: 'H',
        x: 6,
        y: 11
      },
      {
        id: 8,
        label: 'I',
        x: 9,
        y: 7,
      }
    ],
    edges: [
      {
        start: 0,
        end: 1,
        weight: 4
      },
      {
        start: 0,
        end: 7,
        weight: 8
      },
      {
        start: 1,
        end: 2,
        weight: 8,
      },
      {
        start: 1,
        end: 7,
        weight: 11
      },
      {
        start: 2,
        end: 3,
        weight: 7
      },
      {
        start: 2,
        end: 5,
        weight: 4
      },
      {
        start: 2,
        end: 8,
        weight: 2
      },
      {
        start: 3,
        end: 4,
        weight: 9
      },
      {
        start: 3,
        end: 5,
        weight: 14
      },
      {
        start: 4,
        end: 5,
        weight: 10
      },
      {
        start: 5,
        end: 6,
        weight: 2
      },
      {
        start: 6,
        end: 7,
        weight: 1
      },
      {
        start: 6,
        end: 8,
        weight: 6
      },
      {
        start: 7,
        end: 8,
        weight: 7
      }
    ]
  },

  {
    "nodes": [
      {
        "id": 0,
        "label": "Lipis",
        "x": 9,
        "y": 8
      },
      {
        "id": 1,
        "label": "Kuala Kra",
        "x": 9,
        "y": 4
      },
      {
        "id": 4,
        "label": "Cameron Highlands",
        "x": 6,
        "y": 9
      },
      {
        "id": 5,
        "label": "Batang Padang",
        "x": 5,
        "y": 12
      },
      {
        "id": 6,
        "label": "Kampar",
        "x": 3,
        "y": 10
      },
      {
        "id": 7,
        "label": "Perak Tengah",
        "x": 0,
        "y": 11
      },
      {
        "id": 8,
        "label": "Kuala Kangsar",
        "x": 3,
        "y": 5
      },
      {
        "id": 9,
        "label": "Hulu Perak",
        "x": 6,
        "y": 1
      },
      {
        "id": 10,
        "label": "Jerantut",
        "x": 12,
        "y": 7
      },
      {
        "id": 11,
        "label": "Besut",
        "x": 13,
        "y": 2
      },
      {
        "id": 14,
        "label": "Dungun",
        "x": 18,
        "y": 5
      },
      {
        "id": 15,
        "label": "Bera",
        "x": 11,
        "y": 12
      },
      {
        "id": 16,
        "label": "Raub",
        "x": 8,
        "y": 13
      },
      {
        "id": 17,
        "label": "Hulu Selangor",
        "x": 6,
        "y": 15
      },
      {
        "id": 18,
        "label": "Bentong",
        "x": 10,
        "y": 14
      },
      {
        "id": 19,
        "label": "Temerloh",
        "x": 9,
        "y": 11
      },
      {
        "id": 22,
        "label": "Maran",
        "x": 12,
        "y": 11
      },
      {
        "id": 23,
        "label": "Bangdar Gambang",
        "x": 15,
        "y": 10
      },
      {
        "id": 24,
        "label": "Kuala Kuantan",
        "x": 17,
        "y": 9
      },
      {
        "id": 25,
        "label": "Penor",
        "x": 19,
        "y": 10
      },
      {
        "id": 26,
        "label": "Kemaman",
        "x": 14,
        "y": 8
      }
    ],
    "edges": [
      {
        "start": 0,
        "end": 1,
        "weight": 15
      },
      {
        "start": 1,
        "end": 9,
        "weight": 15
      },
      {
        "start": 9,
        "end": 8,
        "weight": 12
      },
      {
        "start": 0,
        "end": 19,
        "weight": 15
      },
      {
        "start": 19,
        "end": 15,
        "weight": 3
      },
      {
        "start": 19,
        "end": 10,
        "weight": 15
      },
      {
        "start": 11,
        "end": 10,
        "weight": 10
      },
      {
        "start": 0,
        "end": 10,
        "weight": 5
      },
      {
        "start": 15,
        "end": 18,
        "weight": 7
      },
      {
        "start": 16,
        "end": 18,
        "weight": 4
      },
      {
        "start": 17,
        "end": 16,
        "weight": 4
      },
      {
        "start": 5,
        "end": 17,
        "weight": 10
      },
      {
        "start": 5,
        "end": 16,
        "weight": 12
      },
      {
        "start": 5,
        "end": 4,
        "weight": 10
      },
      {
        "start": 4,
        "end": 0,
        "weight": 10
      },
      {
        "start": 4,
        "end": 8,
        "weight": 25
      },
      {
        "start": 5,
        "end": 6,
        "weight": 10
      },
      {
        "start": 6,
        "end": 7,
        "weight": 10
      },
      {
        "start": 6,
        "end": 8,
        "weight": 10
      },
      {
        "start": 22,
        "end": 15,
        "weight": 2
      },
      {
        "start": 22,
        "end": 23,
        "weight": 12
      },
      {
        "start": 23,
        "end": 24,
        "weight": 10
      },
      {
        "start": 24,
        "end": 25,
        "weight": 3
      },
      {
        "start": 24,
        "end": 14,
        "weight": 5
      },
      {
        "start": 14,
        "end": 25,
        "weight": 8
      },
      {
        "start": 4,
        "end": 22,
        "weight": 13
      },
      {
        "start": 10,
        "end": 26,
        "weight": 8
      },
      {
        "start": 26,
        "end": 23,
        "weight": 2
      },
      {
        "start": 26,
        "end": 14,
        "weight": 12
      },
      {
        "start": 16,
        "end": 19,
        "weight": 6
      }
    ]
  }
];