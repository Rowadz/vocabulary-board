import { memo } from 'react'
import { Phonetic } from '../../../services/types'

export const SoundPlayer = memo(({ phonetics }: { phonetics: Phonetic[] }) => {
  const soundUrlToPlay = phonetics.find(({ audio }) => !!audio)?.audio

  if (!soundUrlToPlay) {
    return null
  }

  const playSound = () => {
    new Audio(soundUrlToPlay).play()
  }

  return (
    <>
      <button onClick={playSound} className="btn btn-circle btn-xs">
        🔊
      </button>
    </>
  )
})
