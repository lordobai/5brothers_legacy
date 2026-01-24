import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/lib/sanity/client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.description || !body.category) {
      return NextResponse.json(
        { error: 'Missing required fields: title, description, and category are required' },
        { status: 400 }
      )
    }

    // Create resource document in Sanity
    const resource = {
      _type: 'resource',
      title: body.title,
      description: body.description,
      category: body.category,
      resourceType: body.resourceType || 'external',
      url: body.url || undefined,
      contactInformation: {
        phone: body.phone || undefined,
        email: body.email || undefined,
        address: body.address || body.serviceArea || undefined,
      },
      isEmergencyContact: body.resourceType === 'emergency',
      isActive: false, // Inactive until approved
      status: 'pending', // Set to pending for moderation
      submittedBy: {
        name: body.submittedByName || 'Anonymous',
        email: body.submittedByEmail || undefined,
      },
      displayOrder: 999, // Default to end of list
    }

    // Remove undefined fields
    const cleanResource = Object.fromEntries(
      Object.entries(resource).filter(([_, v]) => v !== undefined)
    )

    // Create the document in Sanity
    const created = await writeClient.create(cleanResource)

    return NextResponse.json(
      {
        success: true,
        message: 'Resource submitted successfully. It will be reviewed before being published.',
        id: created._id,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error submitting resource:', error)
    return NextResponse.json(
      {
        error: 'Failed to submit resource',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}

