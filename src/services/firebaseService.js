import { db } from '../firebase'
import {
  collection,
  addDoc,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore'

// Save a user's result (email optional, type required)
// Returns the new document ID (userId)
export async function saveUserResult({ email, type, inviterRef }) {
  const payload = {
    type,
    createdAt: serverTimestamp(),
  }
  if (email) payload.email = email
  if (inviterRef) payload.inviterRef = inviterRef

  const ref = await addDoc(collection(db, 'users'), payload)
  return ref.id
}

// Fetch a user result by ID (used for friend landing page)
export async function getUserResult(userId) {
  const snap = await getDoc(doc(db, 'users', userId))
  if (snap.exists()) return snap.data()
  return null
}

// Send invite emails via a Firebase Cloud Function
// The Cloud Function handles the actual email sending (Resend/SendGrid)
export async function sendInviteEmail({ fromUserId, fromType, friendEmails }) {
  const payload = {
    fromUserId,
    fromType,
    friendEmails,
    createdAt: serverTimestamp(),
  }
  await addDoc(collection(db, 'invites'), payload)
  // The Firebase Cloud Function listens to the 'invites' collection
  // and sends emails via Resend when a new doc is created
}

// Record a friend completion so the inviter can be notified
export async function notifyInviter({ inviterRef, friendType }) {
  if (!inviterRef) return
  await addDoc(collection(db, 'completions'), {
    inviterRef,
    friendType,
    createdAt: serverTimestamp(),
  })
  // A Cloud Function listens here and sends the relationship horoscope email
}
