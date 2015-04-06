/* Data model for IEC gas monitor website
 *
 * data = {
 *   "entryKey" : {
 *     "date": "dateTimeStamp",   // ISO 8601 compliant
 *     "room": int,
 *     "gas": "gasFormula",
 *     "reading": float or int,
 *     "unit": "PPM or PPB",
 *     "device": "deviceID",
 *     "point": "detectionPointID"
 *   }
 * }
 *
 * 
 */

/*
  RegExp Rules:
    (\d*\.?\d+)							# capture 1: float or int reading
    \s											# one space
    (PP[BM])								# capture 2: PPM or PPB unit
    \s											# one space
    (\S{3,10})							# capture 3: gas name variable length
    \s{3}										# three spaces
    (PT\d)									# capture 4: point number
		-												# hyphen
		(RM\d{3} [\w\s]{10})		# capture 5: room number and location
	or
		(ALARM LEV) \d 					# capture 1: capture string to differentiate RegExps
		(PT\d)									# capture 2: point number
		-												# hyphen
		(RM\d{3} [\w\s]{10})		# capture 3: room number and location
		\s+											# variable number of spaces
		(\d*\.?\d+)							# capture 4: float or int reading
		\s											# one space
		(PP[BM])								# capture 5: PPM or PPB unit
	 	\s											# one space
		(\S{3,10})							# capture 6: gas name variable length
*/

// Example Entries

{
  "T163530_PT1-RM142": {
    "date": "2010-08-12T16:35:30",
    "room": 142,
    "gas": "H2Se",
    "reading": 0,
    "unit": "PPB",
    "device": "CM4-852-1283",
    "point": "PT1"
  }
}