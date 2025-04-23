#### Definition

Tokens correspond to the total number of word counts in a text while type corresponds to the total count of unique words in a text. We can say that language consists of various types of words and all the particular instances of these words are called tokens.

For Eg: Do not waste time as wasting time does a lot of harm.

Here,
#tokens=12
#types=11 (time has been repeated twice)

#### Type vs token distinction

The type/token distinction is related to that between universals and particulars. Tokens are concrete particular instances of a general and abstract type.
There is only one word 'the' (type) but many instances of it found on this page (token).

The type/token distinction is applicable beyond language as well. For eg:

- Beethovena's Fifth Symphony and performances of it
- The white elephant and specimens of it
- Kentucky Fried Chicken and its centres

  #### Types - (continued)

  Study this example again: Do not waste time as wasting time does a lot of harm.

  Now, we notice that 'waste' and 'wasting' share a common root. So do 'do' and 'does'.
  Do we consider them as different types? The second approach is to consider them as a single type as inflections(different grammatical forms) of the same word (type).
  Therefore,

  #tokens=12 #types(root)=9

  #### Types_root -

  This is the number of unique types (words) after considering their root forms, by grouping words with the same root.

  e.g. Consider the following sentence -
  `She sells seashells on the seashore. The shells she sells are surely seashells.`

  - Tokens: 13 (total word count). (_She, sells, seashells, on, the, seashore, The, shells, she, sells, are, surely, seashells_)
  - Types: 8 (unique words). (_she, sells, seashells, on, the, seashore, shells, are, surely_)
  - Types Root: 9 (unique root words after grouping). (_she, sell, seashell, on, the, seashore, shell, are, sure._)

  #### Summary

  - **Tokens:** Total number of words in the text, including repetitions.
  - **Types:** Total number of unique words (case-insensitive).
  - **Types Root:** Total number of unique root words (grouping words with the same root).
