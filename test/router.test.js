import test from 'ava'
import reborn from '..'

test('<test-title>', t => {
  const err = t.throws(() => reborn(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(reborn('w'), 'w@zce.me')
  t.is(reborn('w', { host: 'wedn.net' }), 'w@wedn.net')
})
