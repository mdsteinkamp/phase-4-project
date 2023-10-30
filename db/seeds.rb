puts "seeding data..."
User.destroy_all
Song.destroy_all
Chord.destroy_all

test_user = User.create(username: "test", password: "1234")
matts = User.create(username: "matts", password: "1234")

song1 = Song.create(title: "Every Day is Exactly the Same", artist: "Nine Inch Nails", structure: "Verse: E5 C5(first inversion) x3 G5 F5 Chorus: E5 A5 C5 G5")
song2 = Song.create(title: "No Tears Left to Cry", artist: "Ariana Grande", structure: "Intro: Am G F G Am G F C Dm Am C C Refrain/Verse: A7 F G Chorus: Am G F Am G F Em C Dm Am C C C/B")


Chord.create(name: "E5", notes: "E, B", inversion: 'root_position', comments: "Three string E power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create(name: "C5", notes: "G, C", inversion: 'first_inversion', comments: "Two string inverted C power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create(name: "G5", notes: "G, D", inversion: 'second_inversion', comments: "Three string G power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create(name: "F5", notes: "F, C", inversion: 'third_inversion', comments: "Three string F power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create(name: "A5", notes: "A, E", inversion: 'root_position', comments: "Three string A power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create(name: "C5", notes: "C, G", inversion: 'first_inversion', comments: "Three string C power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create(name: "C", notes: "C, B, D", inversion: 'root_position', comments: "CAGED shape C major", image_url: "", user_id: test_user.id, song_id: song1.id)


Chord.create(name: "Am", notes: "A, E, A, C", inversion: 'root_position', comments: "First position Am", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create(name: "G", notes: "G, B, D", inversion: 'root_position', comments: "First position G major", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create(name: "F", notes: "F, C, A", inversion: 'third_inversion', comments: "First fret F barre", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create(name: "Dm", notes: "D, A, F", inversion: 'first_inversion', comments: "First postion Dm", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create(name: "A7", notes: "A, E, G, C#", inversion: 'second_inversion', comments: "First position A7", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create(name: "Em", notes: "E, B, G", inversion: 'first_inversion', comments: "First position Em", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create(name: "C/B", notes: "B, E, G, E", inversion: 'root_position', comments: "Drop A string on C chord to B", image_url: "", user_id: test_user.id, song_id: song2.id)

Chord.create(name: "A", notes: "A, E, C#", inversion: 'third_inversion', comments: "5th String Barre Chord", image_url: "", user_id: matts.id, song_id: song2.id)



puts "done seeding!"